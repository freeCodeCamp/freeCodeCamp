import abc
import datetime
import json
import random
from dataclasses import dataclass
from typing import List, Dict, Optional, Tuple, Union
import numpy as np
import pandas as pd
from scipy.stats import norm

class DataProvider(abc.ABC):
    """Abstract base class for data providers"""
    
    @abc.abstractmethod
    def get_historical_data(self, symbol: str, days: int) -> pd.DataFrame:
        pass
    
    @abc.abstractmethod
    def get_current_price(self, symbol: str) -> float:
        pass

class MockDataProvider(DataProvider):
    """Mock data provider for testing purposes"""
    
    def __init__(self):
        self._stocks = {
            'AAPL': {'current': 175.50, 'volatility': 0.02},
            'GOOGL': {'current': 135.75, 'volatility': 0.015},
            'MSFT': {'current': 310.20, 'volatility': 0.018},
            'AMZN': {'current': 120.30, 'volatility': 0.025},
            'TSLA': {'current': 700.10, 'volatility': 0.03}
        }
        
    def _generate_random_walk(self, initial_price: float, volatility: float, days: int) -> pd.DataFrame:
        dates = pd.date_range(end=datetime.date.today(), periods=days)
        daily_returns = np.random.normal(0, volatility, days)
        prices = initial_price * (1 + daily_returns).cumprod()
        return pd.DataFrame({'Date': dates, 'Close': prices}).set_index('Date')
    
    def get_historical_data(self, symbol: str, days: int) -> pd.DataFrame:
        if symbol not in self._stocks:
            raise ValueError(f"Unknown symbol: {symbol}")
        
        initial_price = self._stocks[symbol]['current'] * random.uniform(0.8, 1.2)
        volatility = self._stocks[symbol]['volatility']
        return self._generate_random_walk(initial_price, volatility, days)
    
    def get_current_price(self, symbol: str) -> float:
        if symbol not in self._stocks:
            raise ValueError(f"Unknown symbol: {symbol}")
        return self._stocks[symbol]['current'] * random.uniform(0.99, 1.01)

@dataclass
class Order:
    """Represents a trade order"""
    symbol: str
    quantity: int
    order_type: str  # 'buy' or 'sell'
    limit_price: Optional[float] = None
    timestamp: datetime.datetime = datetime.datetime.now()

class Portfolio:
    """Manages a collection of holdings and executes trades"""
    
    def __init__(self, initial_cash: float = 100000.0):
        self.cash = initial_cash
        self.holdings: Dict[str, int] = {}  # symbol -> quantity
        self.trade_history: List[Order] = []
        
    def execute_order(self, order: Order, current_price: float) -> bool:
        """Execute an order and update portfolio"""
        if order.order_type == 'buy':
            cost = order.quantity * current_price
            if cost > self.cash:
                return False
            
            self.cash -= cost
            self.holdings[order.symbol] = self.holdings.get(order.symbol, 0) + order.quantity
            self.trade_history.append(order)
            return True
        
        elif order.order_type == 'sell':
            if self.holdings.get(order.symbol, 0) < order.quantity:
                return False
            
            self.cash += order.quantity * current_price
            self.holdings[order.symbol] -= order.quantity
            if self.holdings[order.symbol] == 0:
                del self.holdings[order.symbol]
            self.trade_history.append(order)
            return True
        
        return False
    
    def get_portfolio_value(self, price_lookup: callable) -> float:
        """Calculate total portfolio value"""
        stock_value = sum(
            quantity * price_lookup(symbol)
            for symbol, quantity in self.holdings.items()
        )
        return self.cash + stock_value
    
    def get_holdings_summary(self, price_lookup: callable) -> Dict[str, Dict]:
        """Get detailed holdings information"""
        summary = {}
        for symbol, quantity in self.holdings.items():
            price = price_lookup(symbol)
            summary[symbol] = {
                'quantity': quantity,
                'current_price': price,
                'value': quantity * price,
                'pct_of_portfolio': (quantity * price) / self.get_portfolio_value(price_lookup)
            }
        return summary

class TechnicalIndicator(abc.ABC):
    """Base class for technical indicators"""
    
    def __init__(self, window: int = 14):
        self.window = window
        self.name = self.__class__.__name__
        
    @abc.abstractmethod
    def calculate(self, data: pd.DataFrame) -> pd.Series:
        pass
    
    def __str__(self):
        return f"{self.name}({self.window})"

class MovingAverage(TechnicalIndicator):
    """Simple Moving Average indicator"""
    
    def calculate(self, data: pd.DataFrame) -> pd.Series:
        return data['Close'].rolling(window=self.window).mean()

class RSI(TechnicalIndicator):
    """Relative Strength Index indicator"""
    
    def calculate(self, data: pd.DataFrame) -> pd.Series:
        delta = data['Close'].diff()
        gain = delta.where(delta > 0, 0)
        loss = -delta.where(delta < 0, 0)
        
        avg_gain = gain.rolling(window=self.window).mean()
        avg_loss = loss.rolling(window=self.window).mean()
        
        rs = avg_gain / avg_loss
        return 100 - (100 / (1 + rs))

class BollingerBands(TechnicalIndicator):
    """Bollinger Bands indicator"""
    
    def calculate(self, data: pd.DataFrame) -> pd.DataFrame:
        sma = data['Close'].rolling(window=self.window).mean()
        std = data['Close'].rolling(window=self.window).std()
        
        return pd.DataFrame({
            'upper': sma + (std * 2),
            'middle': sma,
            'lower': sma - (std * 2)
        })

class Strategy(abc.ABC):
    """Abstract base class for trading strategies"""
    
    def __init__(self, data_provider: DataProvider):
        self.data_provider = data_provider
        self.indicators: List[TechnicalIndicator] = []
        
    def add_indicator(self, indicator: TechnicalIndicator):
        self.indicators.append(indicator)
        
    @abc.abstractmethod
    def generate_signal(self, symbol: str) -> Optional[Order]:
        """Generate trading signal for given symbol"""
        pass
    
    def analyze(self, symbol: str, days: int = 365) -> pd.DataFrame:
        """Analyze stock with all indicators"""
        data = self.data_provider.get_historical_data(symbol, days)
        
        for indicator in self.indicators:
            result = indicator.calculate(data)
            if isinstance(result, pd.Series):
                data[indicator.name] = result
            elif isinstance(result, pd.DataFrame):
                data = pd.concat([data, result], axis=1)
        
        return data

class MeanReversionStrategy(Strategy):
    """Mean reversion trading strategy using Bollinger Bands"""
    
    def __init__(self, data_provider: DataProvider, window: int = 20):
        super().__init__(data_provider)
        self.add_indicator(BollingerBands(window))
        
    def generate_signal(self, symbol: str) -> Optional[Order]:
        data = self.analyze(symbol, 100)
        last_row = data.iloc[-1]
        
        if last_row['Close'] < last_row['lower']:
            return Order(symbol, 10, 'buy')
        elif last_row['Close'] > last_row['upper'] and symbol in self.portfolio.holdings:
            return Order(symbol, 10, 'sell')
        return None

class MomentumStrategy(Strategy):
    """Momentum trading strategy using RSI"""
    
    def __init__(self, data_provider: DataProvider, window: int = 14):
        super().__init__(data_provider)
        self.add_indicator(RSI(window))
        self.add_indicator(MovingAverage(50))
        
    def generate_signal(self, symbol: str) -> Optional[Order]:
        data = self.analyze(symbol, 100)
        last_row = data.iloc[-1]
        
        if last_row['RSI'] < 30 and last_row['Close'] > last_row['MovingAverage']:
            return Order(symbol, 10, 'buy')
        elif last_row['RSI'] > 70:
            return Order(symbol, 10, 'sell')
        return None

class Backtester:
    """Backtesting engine for trading strategies"""
    
    def __init__(self, strategy: Strategy, symbols: List[str], initial_cash: float = 100000.0):
        self.strategy = strategy
        self.symbols = symbols
        self.portfolio = Portfolio(initial_cash)
        self.results = []
        
    def run(self, days: int = 365, trades_per_day: int = 1) -> Dict:
        """Run backtest for given number of days"""
        start_value = self.portfolio.cash
        current_date = datetime.date.today() - datetime.timedelta(days=days)
        
        for day in range(days):
            current_date += datetime.timedelta(days=1)
            
            # Simulate market movement
            for _ in range(trades_per_day):
                symbol = random.choice(self.symbols)
                signal = self.strategy.generate_signal(symbol)
                
                if signal:
                    current_price = self.strategy.data_provider.get_current_price(symbol)
                    self.portfolio.execute_order(signal, current_price)
            
            # Record daily portfolio value
            daily_value = self.portfolio.get_portfolio_value(
                lambda s: self.strategy.data_provider.get_current_price(s)
            )
            self.results.append({
                'date': current_date,
                'value': daily_value,
                'cash': self.portfolio.cash,
                'holdings': dict(self.portfolio.holdings)
            })
        
        end_value = self.results[-1]['value']
        return {
            'start_value': start_value,
            'end_value': end_value,
            'return': (end_value - start_value) / start_value,
            'sharpe_ratio': self.calculate_sharpe_ratio(),
            'max_drawdown': self.calculate_max_drawdown(),
            'trades': len(self.portfolio.trade_history)
        }
    
    def calculate_sharpe_ratio(self, risk_free_rate: float = 0.0) -> float:
        """Calculate Sharpe ratio for the backtest period"""
        returns = pd.Series([r['value'] for r in self.results]).pct_change().dropna()
        excess_returns = returns - risk_free_rate / 252
        return excess_returns.mean() / excess_returns.std() * np.sqrt(252)
    
    def calculate_max_drawdown(self) -> float:
        """Calculate maximum drawdown during backtest period"""
        values = pd.Series([r['value'] for r in self.results])
        cumulative_max = values.cummax()
        drawdown = (values - cumulative_max) / cumulative_max
        return drawdown.min()

class RiskManager:
    """Manages portfolio risk and position sizing"""
    
    def __init__(self, max_position_size: float = 0.1, stop_loss_pct: float = 0.05):
        self.max_position_size = max_position_size
        self.stop_loss_pct = stop_loss_pct
        
    def validate_order(self, order: Order, portfolio: Portfolio, price_lookup: callable) -> bool:
        """Validate order against risk parameters"""
        if order.order_type == 'buy':
            position_value = order.quantity * price_lookup(order.symbol)
            portfolio_value = portfolio.get_portfolio_value(price_lookup)
            return position_value <= portfolio_value * self.max_position_size
        return True
    
    def check_stop_loss(self, portfolio: Portfolio, price_lookup: callable) -> List[Order]:
        """Generate stop-loss orders for positions that have hit stop-loss threshold"""
        orders = []
        holdings = portfolio.get_holdings_summary(price_lookup)
        
        for symbol, data in holdings.items():
            current_price = price_lookup(symbol)
            for trade in reversed(portfolio.trade_history):
                if trade.symbol == symbol and trade.order_type == 'buy':
                    purchase_price = price_lookup(symbol)  # Simplified - should use actual purchase price
                    if current_price <= purchase_price * (1 - self.stop_loss_pct):
                        orders.append(Order(symbol, data['quantity'], 'sell'))
                    break
        
        return orders

def main():
    """Main execution function"""
    # Setup components
    data_provider = MockDataProvider()
    symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA']
    
    # Create and configure strategy
    strategy = MomentumStrategy(data_provider)
    
    # Setup backtester
    backtester = Backtester(strategy, symbols)
    
    # Setup risk manager
    risk_manager = RiskManager(max_position_size=0.2, stop_loss_pct=0.1)
    
    # Run backtest
    results = backtester.run(days=180, trades_per_day=3)
    
    # Print results
    print("\nBacktest Results:")
    print(f"Initial Portfolio Value: ${results['start_value']:,.2f}")
    print(f"Final Portfolio Value: ${results['end_value']:,.2f}")
    print(f"Return: {results['return']*100:.2f}%")
    print(f"Sharpe Ratio: {results['sharpe_ratio']:.2f}")
    print(f"Max Drawdown: {results['max_drawdown']*100:.2f}%")
    print(f"Total Trades: {results['trades']}")
    
    # Print final portfolio composition
    final_value = backtester.results[-1]['value']
    print("\nFinal Portfolio Composition:")
    print(f"Cash: ${backtester.portfolio.cash:,.2f} ({(backtester.portfolio.cash/final_value)*100:.1f}%)")
    for symbol, quantity in backtester.portfolio.holdings.items():
        value = quantity * data_provider.get_current_price(symbol)
        print(f"{symbol}: {quantity} shares (${value:,.2f}, {(value/final_value)*100:.1f}%)")

if __name__ == "__main__":
    main()

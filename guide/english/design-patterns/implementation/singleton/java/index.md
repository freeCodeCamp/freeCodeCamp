public class Singleton
{
	private int value;
	private static Singleton instance = null;

	private Singleton()
	{
	}
	public static void setInstance(Singleton _instance)
	{
		instance = _instance;
	}
	public void setValue(int _value)
	{
		value = _value;
	}
	public int getValue()
	{
		return this.value; 
	}
	public static Singleton getInstance()
	{
		if (instance == null)
		{
			instance = new Singleton();
		}
		return instance;
	}
}

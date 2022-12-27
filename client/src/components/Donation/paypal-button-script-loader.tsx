/* eslint-disable camelcase */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { scriptLoader, scriptRemover } from '../../utils/script-loaders';

import type { DonationApprovalData } from './types';

/* eslint-disable @typescript-eslint/naming-convention */
type PayPalButtonScriptLoaderProps = {
  isMinimalForm: boolean | undefined;
  clientId: string;
  createOrder: (
    data: unknown,
    actions: {
      order: {
        create: (arg0: {
          purchase_units: {
            amount: { currency_code: string; value: string };
          }[];
        }) => unknown;
      };
    }
  ) => unknown;
  createSubscription: (
    data: unknown,
    actions: {
      subscription: { create: (arg0: { plan_id: string | null }) => unknown };
    }
  ) => unknown;
  isSubscription: boolean;
  onApprove: (
    data: DonationApprovalData,
    actions?: { order: { capture: () => Promise<unknown> } }
  ) => unknown;
  isPaypalLoading: boolean;
  onCancel: () => unknown;
  onError: () => unknown;
  onLoad: () => void;
  style: {
    color: string;
    height: number;
    tagline: boolean;
  };
  planId: string | null;
};
/* eslint-enable @typescript-eslint/naming-convention */

type PayPalButtonScriptLoaderState = {
  isSdkLoaded: boolean;
  isSubscription: boolean;
};

declare global {
  interface Window {
    paypal: {
      Buttons: {
        driver: (
          react: string,
          { React, ReactDOM }: { React: unknown; ReactDOM: unknown }
        ) => unknown;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
  }
}

export default class PayPalButtonScriptLoader extends Component<
  PayPalButtonScriptLoaderProps,
  PayPalButtonScriptLoaderState
> {
  // Lint says that paypal does not exist on window
  state = {
    isSdkLoaded: window.paypal ? true : false,
    isSubscription: true
  };

  static displayName = 'PayPalButtonScriptLoader';

  static getDerivedStateFromProps(
    props: PayPalButtonScriptLoaderProps,
    state: PayPalButtonScriptLoaderState
  ): { isSubscription: boolean } | null {
    const { isSubscription } = props;
    if (isSubscription !== state.isSubscription) {
      return { isSubscription: isSubscription };
    }
    return null;
  }

  componentDidMount(): void {
    this.loadScript(this.props.isSubscription, true);
  }

  componentWillUnmount(): void {
    scriptRemover('paypal-sdk');
  }

  componentDidUpdate(prevProps: {
    isSubscription: boolean;
    style: {
      color: string;
      height: number;
      tagline: boolean;
    };
    isMinimalForm: boolean | undefined;
  }): void {
    // We need to load a new script if any of the following changes.
    if (
      prevProps.isSubscription !== this.state.isSubscription ||
      prevProps.style.color !== this.props.style.color ||
      prevProps.style.tagline !== this.props.style.tagline ||
      prevProps.style.height !== this.props.style.height ||
      prevProps.isMinimalForm !== this.props.isMinimalForm
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isSdkLoaded: false });
      this.loadScript(this.state.isSubscription, true);
    }
  }

  loadScript(subscription: boolean, deleteScript: boolean | undefined): void {
    if (deleteScript) scriptRemover('paypal-sdk');
    const allowCardPayment = this.props.isMinimalForm ? 'card,' : '';
    let queries = `?client-id=${this.props.clientId}&disable-funding=${allowCardPayment}credit,bancontact,blik,eps,giropay,ideal,mybank,p24,sepa,sofort,venmo`;
    if (subscription) queries += '&vault=true&intent=subscription';

    scriptLoader(
      'paypal-sdk',
      true,
      `https://www.paypal.com/sdk/js${queries}`,
      this.onScriptLoad,
      'paypal'
    );
  }

  onScriptLoad = (): void => {
    this.setState({ isSdkLoaded: true });
    this.props.onLoad();
  };

  captureOneTimePayment(
    data: unknown,
    actions: { order: { capture: () => Promise<unknown> } }
  ): unknown {
    return actions.order.capture().then((details: unknown) => {
      // TODO: this looks like a bug (it probably should not be passing details)
      // but the api does not care what data it gets (yet). If we start to use
      // that, this will need to be changed.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.props.onApprove(details, data);
    });
  }

  render(): JSX.Element {
    const {
      isSdkLoaded,
      isSubscription
    }: { isSdkLoaded: boolean; isSubscription: boolean } = this.state;
    const {
      onApprove,
      onError,
      onCancel,
      createSubscription,
      createOrder,
      style
    } = this.props;

    if (!isSdkLoaded) return <></>;

    // TODO: fill in the full list of props instead of any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Button: React.ComponentType<any> = window.paypal.Buttons.driver(
      'react',
      {
        React,
        ReactDOM
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as React.ComponentType<any>;

    return (
      <Button
        createOrder={isSubscription ? null : createOrder}
        createSubscription={isSubscription ? createSubscription : null}
        onApprove={
          isSubscription
            ? (
                data: DonationApprovalData,
                actions: { order: { capture: () => Promise<unknown> } }
              ) => onApprove(data, actions)
            : (
                data: {
                  [key: string]: unknown;
                  error: string | null;
                },
                actions: { order: { capture: () => Promise<unknown> } }
              ) => this.captureOneTimePayment(data, actions)
        }
        onCancel={onCancel}
        onError={onError}
        style={style}
      />
    );
  }
}

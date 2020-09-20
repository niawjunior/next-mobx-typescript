
import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, UserStore } from "../stores";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class MyApp extends App {
  state = {
    userStore: new UserStore()
  };
  
  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState
    };
  }
  // Hydrate serialized state to store
  static getDerivedStateFromProps(props: any, state: any) {
    state.userStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider 
      userStore={this.state.userStore}
      >
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
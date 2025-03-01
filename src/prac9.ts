type LoadingState = {
  state: 'loading';
};

type FailedState = {
  state: 'failed';
  code: number;
};

type SuccessState = {
  state: 'success';
  response: {
    title: string;
  };
};

type NetworkState = LoadingState | FailedState | SuccessState;

function printNetworkState(state: NetworkState): string {
  switch (state.state) {
    case 'loading':
      return 'loading...';
    case 'failed':
      return `error code is ${state.code}`;
    case 'success':
      return `title is ${state.response.title}`;
    default:
      throw new Error(`unknown state: ${state}`);
  }
}

console.log(printNetworkState({ state: 'loading' }));
console.log(printNetworkState({ state: 'failed', code: 404 }));
console.log(printNetworkState({ state: 'success', response: { title: 'success' } }));

const foo = (networkState: NetworkState) => {
  if ("code" in networkState) {
    return networkState.code;
  }

  if ("response" in networkState) {
    return networkState.response.title;
  }

  return networkState;
};

console.log(foo({ state: 'loading' }));
console.log(foo({ state: 'failed', code: 404 }));
console.log(foo({ state: 'success', response: { title: 'success' } }));

const date = (value: Date | string) => {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return new Date(value).toISOString();
};

console.log(date(new Date()));
console.log(date('2025-03-01T14:28:12.600Z'));

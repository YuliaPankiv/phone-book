export const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.items.push(payload);
};
export const handleAuthFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
export const handleLogOutFulfilled = state => {
  state.user = {};
  state.isLoggedIn = false;
  state.token = null;
  state.isRefreshing = false;
};

export const handlePendingRefresh = state => {
  state.isRefreshing = true;
};
export const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
export const handleRejectedRefresh = state => {
  state.isRefreshing = false;
};

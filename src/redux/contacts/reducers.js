export const handleFetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};
export const handleAddContactFulfilledReducer = (state, action) => {
  state.items.unshift(action.payload);
};
export const handleDeleteContactsFulfilledReducer = (state, action) => {
  const updateContactsList = state.items.filter(
    contact => contact.id !== action.payload.id
  );
  state.items = updateContactsList;
};

export const handlePendingReducer = state => {
  state.isLoading = true;
};
export const handleRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfiledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

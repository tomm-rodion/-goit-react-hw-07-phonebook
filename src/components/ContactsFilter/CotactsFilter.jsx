import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import getFilter from 'redux/filter/selectors';
import { FilterInput, LabelSearchContact } from './CotactsFilter.styled';

export const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const searchQuery = e.target.value;
    return dispatch(setFilter(searchQuery));
  };
  return (
    <>
      <LabelSearchContact htmlFor="filter">
        Search contact by name
      </LabelSearchContact>
      <FilterInput
        type="text"
        placeholder="Name"
        autoComplete="off"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

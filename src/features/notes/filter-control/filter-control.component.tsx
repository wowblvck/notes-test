import { useAppSelector } from '@/store/app.hook';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { FilterActionTypes } from './filter-control.reducer';

const FilterControl = () => {
  const {
    state: { filters },
    dispatch,
  } = useAppSelector();

  const handleSwitch = () => {
    dispatch({
      type: FilterActionTypes.SetImportant,
      payload: !filters.important,
    });
  };

  return (
    <FormGroup sx={{ marginBottom: 2, maxWidth: '215px' }}>
      <FormControlLabel
        control={<Switch checked={filters.important} onChange={handleSwitch} />}
        label="Сначала важные"
      />
    </FormGroup>
  );
};

export default FilterControl;

import React, {useState, useEffect} from 'react';

import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import {
  CircularProgress,
  FormControl, Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const StatPage = () => {
  const [statData, setStatData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedStat, setSelectedStat] = React.useState('LineChart');
  const selectStatItems = [
    {
      id: 0,
      name: 'New cases',
      value: 'LineChart',
    },
    {
      id: 1,
      name: 'Test conducted per year',
      value: 'PieChart',
    },
    {
      id: 2,
      name: 'Infected and recovered',
      value: 'BarChart',
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const statData = await response.json();
        if (statData) {
          setStatData(statData.map((stat) => {
            return {...stat, updated: stat.updated.slice(0, 10)};
          }));
        } else {
          setError('The data is not valid received from the API');
        }
      } catch (err) {
        setError('Backend server did not respond!');
      }

      setLoading(false);
    })();
  }, []);


  const handleChange = (e) => {
    setSelectedStat(e.target.value);
  };

  return (
    <Grid container direction="column" spacing={5} style={{marginTop: '20px'}}>
      {loading &&
        <CircularProgress style={{margin: 'auto'}}/>
      }
      {!loading && error &&
            <Alert style={{margin: '0 20px'}} severity="error">{error}</Alert>
      }
      {!loading && !error &&
            <>
              <Grid item>
                <FormControl style={{minWidth: 200}}>
                  <InputLabel id="select-stat" shrink={true}>Select statistic</InputLabel>
                  <Select
                    variant="filled"
                    labelId="select-stat"
                    id="select-stat"
                    value={selectedStat}
                    label="Statistic"
                    onChange={handleChange}
                  >
                    {selectStatItems.map((statItem) => (
                      <MenuItem key={statItem.id} value={statItem.value}>{statItem.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                {statData && selectedStat === 'LineChart' && <LineChart statData={statData}/>}
                {statData && selectedStat === 'PieChart' && <PieChart statData={statData}/>}
                {statData && selectedStat === 'BarChart' && <BarChart statData={statData}/>}
              </Grid>
            </>
      }
    </Grid>
  );
}
;

export default StatPage;

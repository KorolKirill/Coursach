import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function SearchTable({search, give, setGive, get, setGet}) {

    return (
        <div className='rate'>
            <div style={{width: '50%'}}>
                <div className='search-header'>Give</div>
                <List sx={{ overflowY: 'scroll', height: '600px'}}>
                    {search.map(curr => {
                        return (
                            <ListItem onClick={() => {setGive(curr)}} component="div" disablePadding className={give === curr ? 'selected-curr' : ''}>
                                <ListItemButton >
                                    <ListItemText  className='list-item' primary={curr}  />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
            <div style={{width: '50%'}}>
                <div className='search-header'>Get</div>
                <List sx={{ overflowY: 'scroll', height: '600px'}}>
                    {search.map(curr => {
                        return (
                            <ListItem onClick={() => {setGet(curr)}} component="div" disablePadding className={get === curr ? 'selected-curr' : ''}>
                                <ListItemButton >
                                    <ListItemText className='list-item' primary={curr}  />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </div>
    );
}

export default SearchTable;

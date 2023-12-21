import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function SearchTable() {


    return (
        <div className='rate'>
            <div style={{width: '50%'}}>
                <div className='search-header'>Give</div>
                <List>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton >
                            <ListItemText className='list-item' primary={`UAH`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText className='list-item'  primary={`EUR`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText className='list-item'  primary={`USD`} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div style={{width: '50%'}}>
                <div className='search-header'>Get</div>
                <List>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton >
                            <ListItemText className='list-item' primary={`UAH`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText className='list-item'  primary={`EUR`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText className='list-item'  primary={`USD`} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}

export default SearchTable;

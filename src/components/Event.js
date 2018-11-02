import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
})

const foodoptions = [
    {
        value: 'select',
        label: 'Select',
    },
    {
        value: 'appetizer',
        label: 'Appetizer',
    },
    {
        value: 'maincourse',
        label: 'Maincourse',
    },
    {
        value: 'dessert',
        label: 'Dessert',
    },
    {
        value: 'drinks',
        label: 'Drinks',
    },
];
const family = [
    {
        value: 'srmarrio',
        label: 'Sr.Marrio',
    },
    {
        value: 'jrmarrio',
        label: 'Jr.Marrio',
    },
    {
        value: 'tony',
        label: 'Tony',
    },
    {
        value: 'michael',
        label: 'Michael',
    },
    {
        value: 'tania',
        label: 'Tania',
    },
    {
        value: 'garry',
        label: 'Garry',
    },
    {
        value: 'bruno',
        label: 'Bruno',
    },
];

class Event extends Component{
    state = {
        food: 'select',
        number: '1',
        open: 'false',
    };


    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    render() {
        const {classes} = this.props
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField id="outlined-select-family-native" select label="Family" className={classes.textField}
                           value={this.state.family} onChange={this.handleChange('family')}
                           SelectProps={{
                               native: true,
                               MenuProps: {
                                   className: classes.menu,
                               },
                           }}
                           helperText="Please select your family"
                           margin="normal"
                           variant="outlined">
                    {family.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField id="filled-number" helperText="Please select the number" label="Family Members Count"
                           value={this.state.number} onChange={this.handleChange('number')} type="number"
                           className={classes.textField}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           margin="normal"
                           variant="outlined"/>

                <TextField id="outlined-select-foodtype-native" select label="Food type" className={classes.textField}
                           value={this.state.food} onChange={this.handleChange('food')}
                           SelectProps={{
                               native: true,
                               MenuProps: {
                                   className: classes.menu,
                               },
                           }}
                           helperText="Please select the food type"
                           margin="normal"
                           variant="outlined">
                    {foodoptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField required id="outlined-select-foodtype-native" label="Dish" className={classes.textField}
                           margin="normal" variant="outlined" helperText="Please enter your dish"/>
            </form>
        )
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

export default  withStyles(styles)(Event);

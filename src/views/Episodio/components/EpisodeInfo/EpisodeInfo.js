import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        padding: 0,
    },
    actions: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& > * + *': {
            marginLeft: 0,
        },
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
    },
}));

const UserProfileInfo = (props) => {
    const { className, episode, ...rest } = props;
    const classes = useStyles();
    

    

    

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader title='Información Del Vuelo' />
            <Divider />
            <CardContent className={classes.content}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Code
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{episode.code}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Airline
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{episode.airline}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Origin
                                </Typography>
                            </TableCell>
                            <TableCell>
                                {episode.origin}
                            </TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Destination
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{episode.destination}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Plane
                                </Typography>
                            </TableCell>
                            <TableCell>{episode.plane}</TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Seats
                                </Typography>
                            </TableCell>
                            <TableCell>{episode.seats}</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

UserProfileInfo.propTypes = {
    className: PropTypes.string,
    order: PropTypes.object.isRequired,
};

export default UserProfileInfo;

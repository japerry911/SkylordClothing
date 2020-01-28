import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelectors';

const Directory = ({ sections }) => (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
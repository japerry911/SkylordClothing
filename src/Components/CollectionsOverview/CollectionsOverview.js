import React from 'react';
import './CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collectionArray }) => (
    <div className='collections-overview'>
        {
            collectionArray.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} id={id} {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collectionArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
        <br />
        <div className='see-more'>
            <Link to={`/shop/${title.toLowerCase()}`}>SEE MORE {title.toUpperCase()}</Link>
        </div>
    </div>
);

export default CollectionPreview;
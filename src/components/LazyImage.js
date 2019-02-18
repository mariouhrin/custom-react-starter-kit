import React from 'react';
import land from '../../assets/land.jpg';

const LazyImage = () => <img src={land} width={500} height={300} mode="fit" alt="logo" />;

export default LazyImage;

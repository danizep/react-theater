import React from 'react';
import ReactDOM from 'react-dom';

import Wrapper from './Wrapper.jsx';

require('../scss/default.scss');

const cats = [
    "http://cdn.grumpycats.com/wp-content/uploads/2016/01/10426136_963527260349678_715068149440486950_n-758x758.jpg",
    "http://cdn.grumpycats.com/wp-content/uploads/2016/02/12654647_974282002607537_7798179861389974677_n-758x758.jpg",
    "http://static4.businessinsider.com/image/5485631e69bedda63303ed51/grumpy-cat-has-earned-her-owner-nearly-100-million-in-just-2-years.jpg",
    "http://animalsadda.com/wp-content/uploads/2015/03/Grumpy-Cat-6.jpg",
    "http://dailytwocents.com/wp-content/uploads/2014/06/Grumpy_Cat.jpg",
    "http://static.ujnemzedek.hu/files/images/grumpy_cat_648x365_2360648079-hero.jpg",
    "http://jameshudnall.com/aa/wp-content/uploads/2016/02/gc.jpg",
    "http://cdn.grumpycats.com/wp-content/uploads/2012/10/DSC04268.jpg",
    "http://cdn.playbuzz.com/cdn/670de221-f178-4df3-85c9-12e20afdeb4c/0c86b6e0-2a69-4418-8774-358cb3d53007.jpg",
    "http://i.telegraph.co.uk/multimedia/archive/03344/Grumpycat_3344645b.jpg",
    "http://pixel.nymag.com/imgs/daily/intelligencer/2014/12/08/08-grumpy-cat.w1200.h630.jpg",
    "http://www.bonaelamour.com/wp-content/uploads/2014/09/SARA-SAMPAIO_BONAELAMOUR1.jpg"
];

ReactDOM.render(
    <Wrapper items={cats} />,
    document.getElementById('example')
);

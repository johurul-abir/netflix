import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './banner/Banner.js';
import Tvfeture from './tvdemo/Tvdemo.js';
import DwonloadOffline from './download/Download.js';
import Watch from './watchevery/watch.js';
import Kids from './kisds/Kids.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Banner/>
<Tvfeture/>
<DwonloadOffline/>
<Watch/>
<Kids/>

</>
);



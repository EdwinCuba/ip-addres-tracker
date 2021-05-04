import React, { useState, useEffect } from 'react';
import searchIP from '../utils/searchIp';
import '../assets/styles/components/Searcher.scss';

const Searcher = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');

  const search = async ipOrDomain => {
    const data = await searchIP(ipOrDomain);
    setData(data);
    console.log(data);
  }

  const handleInput = event => {
    let text = event.target.value;
    setInput(text);
  }
  const handleEnter = ({ key, keyCode }) => {
    if (key === 'Enter' || keyCode === 13) {
      search(input);
    }
  }

  React.useEffect(() => {
    search(input);
  }, []);

  return (
    <div className="searcher">
      <h1>IP Address Tracker</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
        <button onClick={() => search(input)}>{'>'}</button>
      </div>

      <div className="information">
        <div className="stat">
          <strong className="title">Ip Address</strong>
          <span className="inf">{(data.ip) ? data.ip : '0.0.0.0'}</span>
        </div>

        <div className="stat">
          <strong className="title">Location</strong>
          <span className="inf">{
            (data.location) ?
              `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
              :
              'Anywhere'
          }</span>
        </div>

        <div className="stat">
          <strong className="title">Timezone</strong>
          <span className="inf">GMT {
            (data.location) ?
              data.location.timezone
              :
              '00:00'
          }</span>
        </div>

        <div className="stat">
          <strong className="title">Isp</strong>
          <span className="inf">{(data.isp) ? data.isp : 'Searching...'}</span>
        </div>
      </div>

    </div>
  );
}

export default Searcher;
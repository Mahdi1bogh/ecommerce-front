import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="search-box">
        <button className="search-button">
          <FaSearch color="#D8D8D8" size="15px" />
        </button>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search goods"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <style jsx>{`
        .search-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 12px;
          padding-right: 12px;
          height: 42px;
          background: #ffffff;
          border: 2px solid #f5f5f5;
          box-sizing: border-box;
          border-radius: 4px;
        }
        .search-box .search-button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          height: 100%;
        }
        .search-box .search-button:focus {
          outline: none;
          background transparent;

        }
        .search-box .search-button:hover {
          opacity: 40%;
        }
        .search-box input {
          
          height: 100%;
          border: none;
          padding-left: 8px;
        }
        .search-box input:focus {
          outline: none;
        }
        
      `}</style>
    </form>
  );
}

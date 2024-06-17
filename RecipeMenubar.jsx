import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './images/banner/logo.png';
import searchIcon from './images/image/search.png';
import navMypage from './images/image/nav-mypage2.png';
import btnWrite from './images/image/btn_write.gif';
import btnList from './images/image/btn_list.gif';
import Login from './Login'; // 로그인 컴포넌트 임포트

const RecipeMenubar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const navigateToPage = (page) => {
    window.location.href = page;
  };

  return (
    <Router>
      <div className="top">
        <h1>
          <a href="http://localhost:3000">
            <img className="navtop_img" src={logo} alt="로고" />
          </a>
          <div className="nav-links">
            <Link to="/Fridge">냉장고 털기</Link>
            <Link to="/recipe">레시피</Link>
          </div>
        </h1>
        <div className="search">
          <form id="frmTopSearch" method="get" action="https://www.example.com/search">
            <div className="search-container">
              <input
                id="searchText"
                name="q"
                type="text"
                className="form-control"
                placeholder="레시피 검색"
                autoComplete="off"
              />
              <select aria-label="검색할 카테고리 선택" id="searchCategory" name="category">
                <option value="0">모든 카테고리</option>
                <option value="2984">한식</option>
                <option value="2984">중식</option>
                <option value="2984">일식</option>
                <option value="20081">밑반찬</option>
                <option value="550">메인반찬</option>
                <option value="2984">빠른조리</option>
                <option value="2984">샐러드</option>
                <option value="2984">육류</option>
                <option value="2984">닭고기</option>
                <option value="2984">술안주</option>
                <option value="2984">해산물</option>
              </select>
              <button type="button" onClick={() => document.getElementById('frmTopSearch').submit()}>
                <img src={searchIcon} alt="검색하기" />
                검색하기
              </button>
            </div>
          </form>
        </div>
        <ul className="user-menu">
          <li>
            <button onClick={handleLoginModal} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img src={navMypage} alt="내정보" />
            </button>
          </li>
          <li>
            <button id="btnTopWrite" style={{ background: 'none', border: 'none', padding: 0 }}>
              <img src={btnWrite} alt="글쓰기" />
            </button>
            <div className="write-layer" style={{ display: 'none', marginLeft: '10px' }}>
              <a href="https://www.example.com/recipe/insert" className="write-direct">
                <img src={btnList} alt="목록" />
                <span>목록</span>
              </a>
            </div>
          </li>
          <li>
            <a href="https://shop.example.com" target="_blank" rel="noopener noreferrer">
              <img src={btnList} alt="스토어" />
            </a>
          </li>
        </ul>
      </div>

      <div className="gnb_nav">
        <ul className="gnb_nav_ea10">
          <li><Link to="/recipe" className="active">추천</Link></li>
          <li><Link to="/recipe_select">분류</Link></li>
          <li><Link to="/ranking">랭킹</Link></li>
          <li><Link to="/magazine">매거진</Link></li>
          <li className="dropdown">
            <button className="dropdown-toggle" id="dropdownMenu1_topMenu" onClick={toggleDropdown} aria-expanded="false" style={{ background: 'none', border: 'none', padding: 0 }}>
              더보기 <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1_topMenu">
                <li><Link to="/Fridge">냉장고 털기</Link></li>
                <li><Link to="/recipe">레시피</Link></li>
                <li><Link to="/recipe-worldcup">레시피 월드컵</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <Modal show={showLoginModal} onHide={handleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onClose={handleLoginModal} />
        </Modal.Body>
      </Modal>
    </Router>
  );
};

export default RecipeMenubar;

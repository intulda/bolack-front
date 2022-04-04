import React from 'react';
import '../../../public/css/common/header.sass';

const Header = () => {
    return (
        <header className={`header_container`}>
            <div className={`header_timeline`}>
                <div>뒤로</div>
                <div>앞으로</div>
            </div>
            <div className={`header_search`}>
                <input type="search" placeholder={`검색하는곳`} />
            </div>
            <div className={`header_profile`}>
                <div>얼굴</div>
            </div>
        </header>
    )
}

export default Header;

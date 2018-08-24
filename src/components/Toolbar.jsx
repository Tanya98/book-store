import React from 'react';
// import { NavLink } from 'react-router-dom';
import ToolbarLink from './ToollBarLink';

function Toolbar({ user }) {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span className="mdc-toolbar__title">Библиотека</span>
                </section>

                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <nav className="mdc-tab-bar">
                        <ToolbarLink exact to="/" className="mdc-tab" activeClassName="mdc-tab--active">Главная</ToolbarLink>
                        <ToolbarLink to="/about" className="mdc-tab" activeClassName="mdc-tab--active">О проекте</ToolbarLink>
                        <ToolbarLink to="/books" className="mdc-tab" activeClassName="mdc-tab--active">Книги</ToolbarLink>
                        {user ?
                            <ToolbarLink to="/logout" className="mdc-tab" activeClassName="mdc-tab--active">Выйти</ToolbarLink>
                            :
                            <ToolbarLink to="/login" className="mdc-tab" activeClassName="mdc-tab--active">Войти</ToolbarLink>
                        }
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Toolbar;
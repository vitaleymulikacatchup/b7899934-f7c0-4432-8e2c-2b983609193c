import React from 'react';

export default function App() {
  return (
    <div className="UA-CD Home">
      {/* HEADER */}
      <header role="banner" data-qa="hd" id="header" className="header">
        <div className="header__yieldifyBanner"></div>
        <div className="header__wrapper">
          <div className="header__content">
            <a href="#content" className="btn skip-to-content">
              <span className="btn__label">Перейти до вмісту</span>
            </a>
            <div role="search" className="header__search-cta">
              <a href="/storinka-poshuku">
                <svg role="img" aria-label="Пошук" width="16" height="16" className="icon icon--search icon-bold-chevron">
                  <use xlinkHref="#icon-search" />
                </svg>
              </a>
            </div>
            <div data-qa="hd-logo" className="header__logo">
              <a href="/">
                <img src="/-/media/project/loreal/brand-sites/mny/master/demo/logos-logo-small.svg?rev=-1" width="155" height="24" alt="Maybelline New York | Перейти на головну сторінку" />
              </a>
            </div>
            <button id="header-back-btn" className="header-back">
              <svg role="img" aria-label="Loreal.Feature.Navigation.ViewModels.BackButtonViewModel" aria-hidden="true" width="12" height="12" className="icon icon--chevron icon-bold-chevron">
                <use xlinkHref="#icon-chevron" />
              </svg>
            </button>
            <div data-qa="hd-nav" className="header__nav">
              <nav role="navigation" aria-labelledby="burger">
                <button id="burger" aria-expanded="false" className="toggle header__burger" aria-label="" data-qa="burger">
                  <svg aria-hidden="true" width="17" height="11.5" className="icon icon--menu icon-bold-chevron">
                    <use xlinkHref="#icon-menu" />
                  </svg>
                  <span className="is-sr-only" aria-live="polite"></span>
                </button>
                <ul data-qa="nav-main" id="nav_list" className="toggle__panel nav_list">
                  <li className="nav__l1 double">
                    <a href="/usi-produkty" data-qa="lvl1">
                      <div className="nav_button">
                        <picture className="nav__l1-picture">
                          <source media="(min-width: 1280px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" />
                          <source srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" />
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" alt="Бестселер" className="header__lazy-image to-load" />
                        </picture>
                        <span>Всі продукти</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav__l1 drop_link double">
                    <a href="/usi-produkty/makiyazh-ochei" data-qa="lvl1" className="nav_button desktop-only">
                      <div>
                        <span>Очі</span>
                      </div>
                    </a>
                    <button aria-expanded="false" aria-controls="Очі-content" id="Очі-title" className="nav_button mobile-only">
                      <picture className="nav__l1-picture">
                        <source media="(max-width: 1024px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mny_nav_eye3.jpg?rev=66be2997e98a4d3bbccf6bd0c24e13b5" />
                        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mny_nav_eye3.jpg?rev=66be2997e98a4d3bbccf6bd0c24e13b5" alt="Maybelline New York, навігація, очі 3" className="header__lazy-image to-load" />
                      </picture>
                      <span>Очі</span>
                      <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron nav_drop_arrow_mobile icon-bold-chevron">
                        <use xlinkHref="#icon-chevron" />
                      </svg>
                    </button>
                    <div id="Очі-content" role="region" aria-hidden="true" aria-labelledby="Очі-title" className="toggle__panel a11y-switcher">
                      <div className="toggle__content">
                        <div className="nal__l2-pannel-row">
                          <ul className="nav__l2-list">
                            <li data-tag-wrapper="" data-root-tagging-data="{&quot;label&quot;:&quot;homepage&quot;}" className="nav__l2-banner-card-wrapper">
                              <a href="/usi-produkty/makiyazh-ochei" className="nav__l2-banner-card-cta">
                                <span>ДИВИСЬ УСІ ЗАСОБИ ДЛЯ ОЧЕЙ</span>
                                <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron icon-bold-chevron">
                                  <use xlinkHref="#icon-chevron" />
                                </svg>
                              </a>
                              <div data-tag-product-identifier="" className="nav__l2-banner-card">
                                <div data-tag-product-position="1" data-tag-product-variant="Black" data-tag-product-price="" data-tag-product-currency="UKR" data-tag-product-name="Lash Sensational Sky High Туш для подовження та об'єму вій" data-tag-product-id="30166967" data-tag-product-list="highlight-product" data-tag-product-category="makeup-eye" data-tag-product-brand="MNY" data-tag-product-dimension36="Black" data-tag-product-dimension48="30166967" data-tag-product-dimension49="not present" data-tag-product-dimension91="none" data-tag-product-impression-dimension91="none" className="nav__l2-banner-card-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/highlighted-products/lash-sensational-sky-high.jpg?rev=26bfe4f8de8d40229595ec06b61e6078" alt="Lash Sensational Sky High" className="nav__l2-banner-card-image header__lazy-image to-load" />
                                  <a href="/usi-produkty/makiyazh-ochei/tush-dlia-viy/tush-dlia-podovzhennia-ta-obyomu-viy-lash-sensational-sky-high" className="nav__l2-banner-card-info">
                                    <span className="nav__l2-banner-card-info__short-title">Lash Sensational Sky High</span>
                                    <p className="nav__l2-banner-card-info__short-desc">Кольорова туш для вій у макіяжі</p>
                                  </a>
                                  <span className="nav__l2-banner-card-description">Безмежна довжина й об’єм</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-ochei/brovy" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/brow.png?rev=03174272afc14c14b823954051ff85ed" alt="Брови" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Брови</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-ochei/pidvodka-dlia-ochei" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/eyeliner.png?rev=be38f204b9394ce3b5a666ec978dcb9f" alt="Підводка для очей" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Підводка для очей</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-ochei/tini-dlia-povik" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/eyeshadow.png?rev=6485203f4cfa4e57b7f09b0010acc006" alt="Тіні для повік" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Тіні для повік</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-ochei/tush-dlia-viy" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mascara.png?rev=1a240e07025140398b3cc167a6c3f0ff" alt="Туш для вій" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Туш для вій</span>
                              </a>
                            </li>
                            <li className="mobile-only-view">
                              <div className="nav__l2 sub_item">
                                <a href="/usi-produkty/makiyazh-ochei" className="nav__l2-card-title">View All</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav__l1 drop_link double">
                    <a href="/usi-produkty/makiyazh-oblychchia" data-qa="lvl1" className="nav_button desktop-only">
                      <div>
                        <span>Обличчя</span>
                      </div>
                    </a>
                    <button aria-expanded="false" aria-controls="Обличчя-content" id="Обличчя-title" className="nav_button mobile-only">
                      <picture className="nav__l1-picture">
                        <source media="(max-width: 1024px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/face.jpg?rev=a4df9629a774434481a056db5ef4daa1" />
                        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/face.jpg?rev=a4df9629a774434481a056db5ef4daa1" alt="Обличчя" className="header__lazy-image to-load" />
                      </picture>
                      <span>Обличчя</span>
                      <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron nav_drop_arrow_mobile icon-bold-chevron">
                        <use xlinkHref="#icon-chevron" />
                      </svg>
                    </button>
                    <div id="Обличчя-content" role="region" aria-hidden="true" aria-labelledby="Обличчя-title" className="toggle__panel a11y-switcher">
                      <div className="toggle__content">
                        <div className="nal__l2-pannel-row">
                          <ul className="nav__l2-list">
                            <li data-tag-wrapper="" data-root-tagging-data="{&quot;label&quot;:&quot;homepage&quot;}" className="nav__l2-banner-card-wrapper">
                              <a href="/usi-produkty/makiyazh-oblychchia" className="nav__l2-banner-card-cta">
                                <span>ДИВИСЬ УСІ ЗАСОБИ ДЛЯ ОБЛИЧЧЯ</span>
                                <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron icon-bold-chevron">
                                  <use xlinkHref="#icon-chevron" />
                                </svg>
                              </a>
                              <div data-tag-product-identifier="" className="nav__l2-banner-card">
                                <div data-tag-product-position="1" data-tag-product-variant="102" data-tag-product-price="" data-tag-product-currency="UKR" data-tag-product-name="ТОНАЛЬНА КРЕМ-ПУДРА SUPER STAY HYBRID SUPER STAY " data-tag-product-id="3600531666583" data-tag-product-list="highlight-product" data-tag-product-category="makeup-face" data-tag-product-brand="MNY" data-tag-product-dimension36="102" data-tag-product-dimension48="3600531666583" data-tag-product-dimension49="not present" data-tag-product-dimension91="none" data-tag-product-impression-dimension91="none" className="nav__l2-banner-card-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/highlighted-products/super_stay-powder-foundation.jpg?rev=2e092f2947df4b368a45fa3208876c9e" alt="Тональна крем-пудра Super Stay" className="nav__l2-banner-card-image header__lazy-image to-load" />
                                  <a href="/usi-produkty/makiyazh-oblychchia/tonalna-osnova/tonalna-krem-pudra-super-stay-hybrid-powder-foundation" className="nav__l2-banner-card-info">
                                    <span className="nav__l2-banner-card-info__short-title">ТОНАЛЬНА КРЕМ-ПУДРА SUPER STAY HYBRID</span>
                                    <p className="nav__l2-banner-card-info__short-desc">зі стійкістю до 24 годин</p>
                                  </a>
                                  <span className="nav__l2-banner-card-description">ПУДРА ДАЄ СУПЕРСИЛУ</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-oblychchia/bb-krem-i-zvolozhuvalnyi-zasib-iz-tonuvalnym-efektom" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/bb-cream-and-tinted-moisturizers.png?rev=961e7253713c475b931281f8e0ca9672" alt="BB-крем і зволожувальні засоби з тонувальним ефектом" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">BB-крем</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-oblychchia/rumiana-ta-bronzer" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/blush-and-bronzer.png?rev=c86a37a0c2eb4b03974d84d10ba77395" alt="Рум’яна та бронзер" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Рум’яна та бронзер</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-oblychchia/konsyler-dlia-oblychchia" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/concealer.png?rev=10c798d4c60143b7b26df3777b2f675c" alt="Консилер для обличчя" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Консилер для обличчя</span>
                              </a>
                            </li>
                            <li>
                              <a href="/usi-produkty/makiyazh-oblychchia/tonalna-osnova" className="nav__l2 sub_item">
                                <div className="nav__l2-image-wrapper">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/foundation.png?rev=8cfc4b7510a74b4f95e5bb2d55a1f" alt="Тональна основа" className="header__lazy-image to-load" />
                                </div>
                                <span className="nav__l2-card-title">Тональна основа</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav role="navigation" aria-labelledby="burger">
        <button id="burger" aria-expanded="false" className="toggle header__burger" aria-label="" data-qa="burger">
          <svg aria-hidden="true" width="17" height="11.5" className="icon icon--menu icon-bold-chevron">
            <use xlinkHref="#icon-menu" href="#icon-menu"></use>
          </svg>
          <span aria-live="polite" className="is-sr-only"></span>
        </button>
        <ul data-qa="nav-main" id="nav_list" className="toggle__panel nav_list">
          <li className="nav__l1 double">
            <a href="/usi-produkty" data-qa="lvl1">
              <div className="nav_button">
                <picture className="nav__l1-picture">
                  <source media="(min-width: 1280px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" />
                  <source srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" />
                  <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/best-seller.jpg?rev=59c4a94837d94c029451e65f79060f1c" alt="Бестселер" className="header__lazy-image to-load" />
                </picture>
                <span>Всі продукти</span>
              </div>
            </a>
          </li>
          <li className="nav__l1 drop_link double">
            <a href="/usi-produkty/makiyazh-ochei" data-qa="lvl1" className="nav_button desktop-only">
              <div>
                <span>Очі</span>
              </div>
            </a>
            <button aria-expanded="false" aria-controls="Очі-content" id="Очі-title" className="nav_button mobile-only">
              <picture className="nav__l1-picture">
                <source media="(max-width: 1024px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mny_nav_eye3.jpg?rev=66be2997e98a4d3bbccf6bd0c24e13b5" />
                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mny_nav_eye3.jpg?rev=66be2997e98a4d3bbccf6bd0c24e13b5" alt="Maybelline New York, навігація, очі 3" className="header__lazy-image to-load" />
              </picture>
              <span>Очі</span>
              <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron nav_drop_arrow_mobile icon-bold-chevron">
                <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
              </svg>
            </button>
            <div id="Очі-content" role="region" aria-hidden="true" aria-labelledby="Очі-title" className="toggle__panel a11y-switcher">
              <div className="toggle__content">
                <div className="nal__l2-pannel-row">
                  <ul className="nav__l2-list">
                    <li data-tag-wrapper="" data-root-tagging-data="{&quot;label&quot;:&quot;homepage&quot;}" className="nav__l2-banner-card-wrapper">
                      <a href="/usi-produkty/makiyazh-ochei" className="nav__l2-banner-card-cta">
                        <span>ДИВИСЬ УСІ ЗАСОБИ ДЛЯ ОЧЕЙ</span>
                        <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron icon-bold-chevron">
                          <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
                        </svg>
                      </a>
                      <div data-tag-product-identifier="" className="nav__l2-banner-card">
                        <div data-tag-product-position="1" data-tag-product-variant="Black" data-tag-product-price="" data-tag-product-currency="UKR" data-tag-product-name="Lash Sensational Sky High Туш для подовження та об'єму вій" data-tag-product-id="30166967" data-tag-product-list="highlight-product" data-tag-product-category="makeup-eye" data-tag-product-brand="MNY" data-tag-product-dimension36="Black" data-tag-product-dimension48="30166967" data-tag-product-dimension49="not present" data-tag-product-dimension91="none" data-tag-product-impression-dimension91="none" className="nav__l2-banner-card-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/highlighted-products/lash-sensational-sky-high.jpg?rev=26bfe4f8de8d40229595ec06b61e6078" alt="Lash Sensational Sky High" className="nav__l2-banner-card-image header__lazy-image to-load" />
                          <a href="/usi-produkty/makiyazh-ochei/tush-dlia-viy/tush-dlia-podovzhennia-ta-obyemu-viy-lash-sensational-sky-high" className="nav__l2-banner-card-info">
                            <span className="nav__l2-banner-card-info__short-title">Lash Sensational Sky High</span>
                            <p className="nav__l2-banner-card-info__short-desc">Кольорова туш для вій у макіяжі</p>
                          </a>
                          <span className="nav__l2-banner-card-description">Безмежна довжина й об’єм</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-ochei/brovy" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/brow.png?rev=03174272afc14c14b823954051ff85ed" alt="Брови" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Брови</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-ochei/pidvodka-dlia-ochei" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/eyeliner.png?rev=be38f204b9394ce3b5a666ec978dcb9f" alt="Підводка для очей" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Підводка для очей</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-ochei/tini-dlia-povik" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/eyeshadow.png?rev=6485203f4cfa4e57b7f09b0010acc006" alt="Тіні для повік" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Тіні для повік</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-ochei/tush-dlia-viy" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/eyes/mascara.png?rev=1a240e07025140398b3cc167a6c3f0ff" alt="Туш для вій" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Туш для вій</span>
                      </a>
                    </li>
                    <li className="mobile-only-view">
                      <div className="nav__l2 sub_item">
                        <a href="/usi-produkty/makiyazh-ochei" className="nav__l2-card-title">View All</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="nav__l1 drop_link double">
            <a href="/usi-produkty/makiyazh-oblychchia" data-qa="lvl1" className="nav_button desktop-only">
              <div>
                <span>Обличчя</span>
              </div>
            </a>
            <button aria-expanded="false" aria-controls="Обличчя-content" id="Обличчя-title" className="nav_button mobile-only">
              <picture className="nav__l1-picture">
                <source media="(max-width: 1024px)" srcSet="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/face.jpg?rev=a4df9629a774434481a056db5ef4daa1" />
                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/mobile/face.jpg?rev=a4df9629a774434481a056db5ef4daa1" alt="Обличчя" className="header__lazy-image to-load" />
              </picture>
              <span>Обличчя</span>
              <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron nav_drop_arrow_mobile icon-bold-chevron">
                <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
              </svg>
            </button>
            <div id="Обличчя-content" role="region" aria-hidden="true" aria-labelledby="Обличчя-title" className="toggle__panel a11y-switcher">
              <div className="toggle__content">
                <div className="nal__l2-pannel-row">
                  <ul className="nav__l2-list">
                    <li data-tag-wrapper="" data-root-tagging-data="{&quot;label&quot;:&quot;homepage&quot;}" className="nav__l2-banner-card-wrapper">
                      <a href="/usi-produkty/makiyazh-oblychchia" className="nav__l2-banner-card-cta">
                        <span>ДИВИСЬ УСІ ЗАСОБИ ДЛЯ ОБЛИЧЧЯ</span>
                        <svg aria-hidden="true" width="12" height="12" className="icon icon--chevron icon-bold-chevron">
                          <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
                        </svg>
                      </a>
                      <div data-tag-product-identifier="" className="nav__l2-banner-card">
                        <div data-tag-product-position="1" data-tag-product-variant="102" data-tag-product-price="" data-tag-product-currency="UKR" data-tag-product-name="ТОНАЛЬНА КРЕМ-ПУДРА SUPER STAY HYBRID SUPER STAY " data-tag-product-id="3600531666583" data-tag-product-list="highlight-product" data-tag-product-category="makeup-face" data-tag-product-brand="MNY" data-tag-product-dimension36="102" data-tag-product-dimension48="3600531666583" data-tag-product-dimension49="not present" data-tag-product-dimension91="none" data-tag-product-impression-dimension91="none" className="nav__l2-banner-card-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/highlighted-products/super_stay-powder-foundation.jpg?rev=2e092f2947df4b368a45fa3208876c9e" alt="Тональна крем-пудра Super Stay" className="nav__l2-banner-card-image header__lazy-image to-load" />
                          <a href="/usi-produkty/makiyazh-oblychchia/tonalna-osnova/tonalna-krem-pudra-super-stay-hybrid-powder-foundation" className="nav__l2-banner-card-info">
                            <span className="nav__l2-banner-card-info__short-title">ТОНАЛЬНА КРЕМ-ПУДРА SUPER STAY HYBRID</span>
                            <p className="nav__l2-banner-card-info__short-desc">зі стійкістю до 24 годин</p>
                          </a>
                          <span className="nav__l2-banner-card-description">ПУДРА ДАЄ СУПЕРСИЛУ</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/bb-krem-i-zvolozhuvalnyi-zasib-iz-tonuvalnym-efektom" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/bb-cream-and-tinted-moisturizers.png?rev=961e7253713c475b931281f8e0ca9672" alt="BB-крем і зволожувальні засоби з тонувальним ефектом" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">BB-крем</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/rumiana-ta-bronzer" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/blush-and-bronzer.png?rev=c86a37a0c2eb4b03974d84d10ba77395" alt="Рум’яна та бронзер" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Рум’яна та бронзер</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/konsyler-dlia-oblychchia" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/concealer.png?rev=10c798d4c60143b7b26df3777b2f675c" alt="Консилер для обличчя" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Консилер для обличчя</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/tonalna-osnova" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/foundation.png?rev=8cfc4b7510a74b4f95e5bb2d55a1fca2" alt="Тональна основа" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Тональна основа</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/pudra" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/powder.png?rev=5218f7f8b12847d8b857e903cd4379c6" alt="Пудра" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Пудра</span>
                      </a>
                    </li>
                    <li>
                      <a href="/usi-produkty/makiyazh-oblychchia/praimer" className="nav__l2 sub_item">
                        <div className="nav__l2-image-wrapper">
                          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazysrc="-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/header/face/primer-and-setting-spray.png?rev=2a7bc52c2fec4991b11d2e73d2173eb5" alt="Праймер і спрей-фіксатор" className="header__lazy-image to-load" />
                        </div>
                        <span className="nav__l2-card-title">Праймер і спрей-фіксатор</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* MAIN-CONTENT */}
      <main id="main" role="main">
        <div id="content">
          <div className="container">
            <div className="component component--product-carousel">
              <div aria-roledescription="Карусель" data-qa="cl" role="group" className="carousel single multiple centering">
                <div className="carousel__wrapper">
                  <ul className="carousel__inner">
                    <li data-qa="cl-s" className="carousel__slide prev-to-active" aria-current="true">
                      <div data-qa="hero" className="hero hero-video">
                        <a href="/usi-produkty/makiyazh-oblychchia/rumiana-ta-bronzer/sunkisser-ridki-rumyana-haylayter" data-qa="hero-link" className="hero__link">
                          <div data-qa="hv" className="hosted-video__container hero__video">
                            <video poster="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/sunkisser_desktop_v2_00050.jpg?rev=b5be5c83cfc64c13b0e611d1baad4b90&cx=0.25&cy=0.31&cw=1111&ch=411&hash=CABF8AF48E5D7CDA8B9EAA6B0129222C" loop="loop" data-src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/sunkisser_4sec_v3_desktop.mp4?rev=f2e0fb0ffdf843f5b11804374dfd2112" data-qa="hv-video" preload="none" playsInline>
                              <source src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/sunkisser_4sec_v3_desktop.mp4?rev=f2e0fb0ffdf843f5b11804374dfd2112" type="video/mp4" />
                            </video>
                            <button data-qa="hv-button" tabIndex="0" aria-label="" role="button">
                              <svg viewBox="0 0 60 60" role="img" aria-label="Відтворення відео" width="60" height="60" className="icon icon--play">
                                <path d="M30,0c16.6,0,30,13.4,30,30S46.6,60,30,60S0,46.6,0,30S13.4,0,30,0z"></path>
                                <path d="M40,29.5L23,41V18L40,29.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <div data-qa="hero-cont" className="hero-default">
                            <div data-qa="hero-cnt" className="hero__content"></div>
                          </div>
                          <div data-qa="hero-cont" className="hero-packshot">
                            <picture data-qa="hero-pck-pic" className="hero__packshot">
                              <source media="(min-width: 1280px)" srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/maybelline-sunkisser-blush-bronzer_packshot_new3.png?rev=9afb74db73bb431280d9a60e235dec31&cx=0.49&cy=0.47&cw=315&ch=315&hash=F2E68112515659758E1BE5A0B86A16DF" />
                              <source media="(min-width: 767px)" srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/maybelline-sunkisser-blush-bronzer_packshot_new3.png?rev=9afb74db73bb431280d9a60e235dec31&cx=0.49&cy=0.47&cw=169&ch=169&hash=E4195D373FB0C7C4F7054151717C335" />
                              <source srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/maybelline-sunkisser-blush-bronzer_packshot_new3.png?rev=9afb74db73bb431280d9a60e235dec31&cx=0.49&cy=0.47&cw=148&ch=148&hash=0AD178B659EFAACB89F3C5E24AD59A37" />
                              <img src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/maybelline-sunkisser-blush-bronzer_packshot_new3.png?rev=9afb74db73bb431280d9a60e235dec31&cx=0.49&cy=0.47&cw=315&ch=311&hash=7DEDCE70B9356090147436EADBD4AE58" data-lazy="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/maybelline-sunkisser-blush-bronzer_packshot_new3.png?rev=9afb74db73bb431280d9a60e235dec31&cx=0.49&cy=0.47&cw=315&ch=311&hash=7DEDCE70B9356090147436EADBD4AE58" alt="Maybelline Sunkisser Blush Bronzer packshot new3" className="-loaded" />
                            </picture>
                            <div data-qa="hero-cnt" className="hero__content">
                              <h2 className="hero__title">SUNKISSER</h2>
                              <p className="hero__subtitle">РІДКІ РУМ'ЯНА ДЛЯ ОБЛИЧЧЯ З ЕФЕКТОМ СЯЯННЯ</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li data-qa="cl-s" className="carousel__slide hidden-slide prev-to-active" inert="true">
                      <div data-qa="hero" className="hero hero-video">
                        <a href="/usi-produkty/makiyazh-hub/pomada-dlia-hub/stiyka-ridka-hliantseva-pomada-dlia-hub-super-stay-vinyl-ink" data-qa="hero-link" className="hero__link">
                          <div data-qa="hv" className="hosted-video__container hero__video">
                            <video poster="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/vynyl_matt_desktop_v2.jpg?rev=354cc4c3fa1c43709a8f8390dc110246&cx=0.25&cy=0.31&cw=1111&ch=411&hash=277D495838768892545F9F5CBF7C873F" loop="loop" data-src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/vynyl_matt_4sec_desktop.mp4?rev=0e6c3430bb884f5d820b74d5c427d4a9" data-qa="hv-video" preload="none" playsInline>
                              <source src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage-2024/product-carousel/vynyl_matt_4sec_desktop.mp4?rev=0e6c3430bb884f5d820b74d5c427d4a9" type="video/mp4" />
                            </video>
                            <button data-qa="hv-button" tabIndex="0" aria-label="" role="button">
                              <svg viewBox="0 0 60 60" role="img" aria-label="Відтворення відео" width="60" height="60" className="icon icon--play">
                                <path d="M30,0c16.6,0,30,13.4,30,30S46.6,60,30,60S0,46.6,0,30S13.4,0,30,0z"></path>
                                <path d="M40,29.5L23,41V18L40,29.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <div data-qa="hero-cont" className="hero-default">
                            <div data-qa="hero-cnt" className="hero__content"></div>
                          </div>
                          <div data-qa="hero-cont" className="hero-packshot">
                            <picture data-qa="hero-pck-pic" className="hero__packshot">
                              <source media="(min-width: 1280px)" data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-color/super-stay-vinyl-ink-longwear-liquid-lipstick/maybelline-vinilink_cheeky-new.png?rev=6f1878bcd6bc4f3ba0dd7fbd1d3d2de4&cx=0.44&cy=0.54&cw=315&ch=315&hash=6A6DFDA50B045D1F6626238DBC130F7F" />
                              <source media="(min-width: 767px)" data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-color/super-stay-vinyl-ink-longwear-liquid-lipstick/maybelline-vinilink_cheeky-new.png?rev=6f1878bcd6bc4f3ba0dd7fbd1d3d2de4&cx=0.44&cy=0.54&cw=169&ch=169&hash=604A631950D5441B73E23315157027CE" />
                              <source data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-color/super-stay-vinyl-ink-longwear-liquid-lipstick/maybelline-vinilink_cheeky-new.png?rev=6f1878bcd6bc4f3ba0dd7fbd1d3d2de4&cx=0.44&cy=0.54&cw=148&ch=148&hash=909BDA75F285552CFEE0BC37F6B5682D" />
                              <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazy="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-color/super-stay-vinyl-ink-longwear-liquid-lipstick/maybelline-vinilink_cheeky-new.png?rev=6f1878bcd6bc4f3ba0dd7fbd1d3d2de4&cx=0.44&cy=0.54&cw=309&ch=315&hash=F9CA74C35118387BBDF2B683B3BFC59A" alt="Maybelline VinilInk cheeky new" />
                            </picture>
                            <div data-qa="hero-cnt" className="hero__content">
                              <h2 className="hero__title">VINYL INK</h2>
                              <p className="hero__subtitle">СТІЙКА РІДКА ПОМАДА ДЛЯ ГУБ</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li data-qa="cl-s" className="carousel__slide hidden-slide prev-to-active" inert="true">
                      <div data-qa="hero" className="hero hero-video">
                        <a href="/usi-produkty/makiyazh-hub/blysk-dlia-hub/blysk-dlia-hub-lifter-plump" data-qa="hero-link" className="hero__link">
                          <div data-qa="hv" className="hosted-video__container hero__video">
                            <video poster="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage/full-width-carousel/lifter-plump/mny_homepagestill_amberlie_lifterplump-1440x700.jpg?rev=80d1ac673dbb47adbe7cecd2b345d395&cx=0.25&cy=0.31&cw=1400&ch=540&hash=07C25131C158BBF4D734BC808FDFED38" loop="loop" data-src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage/full-width-carousel/lifter-plump/mny_homepagevideo_lifterplump_lghp3004_1400x700.mp4?rev=a2743e92be6f4dc590e3fdff57d74162" data-qa="hv-video" preload="none" playsInline>
                              <source src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage/full-width-carousel/lifter-plump/mny_homepagevideo_lifterplump_lghp3004_1400x700.mp4?rev=a2743e92be6f4dc590e3fdff57d74162" type="video/mp4" />
                            </video>
                            <button data-qa="hv-button" tabIndex="0" aria-label="" role="button">
                              <svg viewBox="0 0 60 60" role="img" aria-label="Відтворення відео" width="60" height="60" className="icon icon--play">
                                <path d="M30,0c16.6,0,30,13.4,30,30S46.6,60,30,60S0,46.6,0,30S13.4,0,30,0z"></path>
                                <path d="M40,29.5L23,41V18L40,29.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <div data-qa="hero-cont" className="hero-default">
                            <div data-qa="hero-cnt" className="hero__content"></div>
                          </div>
                          <div data-qa="hero-cont" className="hero-packshot">
                            <picture data-qa="hero-pck-pic" className="hero__packshot">
                              <source media="(min-width: 1280px)" data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-gloss/lifter-plump-lip-plumping-gloss-makeup/lifter-plump-square-product-packshot.png?rev=a2ffad8ded474b30a8f9d61502d6e8a8&cx=0.25&cy=0.31&cw=315&ch=315&hash=FD8E2F53D3811D901B0263B43B0FDC1D" />
                              <source media="(min-width: 767px)" data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-gloss/lifter-plump-lip-plumping-gloss-makeup/lifter-plump-square-product-packshot.png?rev=a2ffad8ded474b30a8f9d61502d6e8a8&cx=0.25&cy=0.31&cw=169&ch=169&hash=DAFFAFD09459984286E933D869C9A4CB" />
                              <source data-srcSet="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-gloss/lifter-plump-lip-plumping-gloss-makeup/lifter-plump-square-product-packshot.png?rev=a2ffad8ded474b30a8f9d61502d6e8a8&cx=0.25&cy=0.31&cw=148&ch=148&hash=C191CBE74AF6607C875B632C5563351A" />
                              <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-lazy="/-/media/project/loreal/brand-sites/mny/emea/ua/products/lip-makeup/lip-gloss/lifter-plump-lip-plumping-gloss-makeup/lifter-plump-square-product-packshot.png?rev=a2ffad8ded474b30a8f9d61502d6e8a8&cx=0.25&cy=0.31&cw=500&ch=500&hash=DA55A8C48100E76E91547278CB128B3C" alt="Фотографія засобу Lifter Plump у квадратному пакованні" />
                            </picture>
                            <div data-qa="hero-cnt" className="hero__content">
                              <h2 className="hero__title">LIFTER PLUMP</h2>
                              <p className="hero__subtitle">Блиск-плампер для губ з екстрактом перцю чилі</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <button disabled="disabled" data-qa="cl-n-prev" tabIndex="0" className="carousel__navigation-prev">
                  <svg aria-label="Попередній слайд" role="img" className="icon icon--chevron">
                    <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
                  </svg>
                </button>
                <ul data-qa="cl-p" className="carousel__pagination">
                  <li className="carousel__pagination-item full is-active" data-qa="cl-p-item1" aria-current="true">
                    <span className="carousel__pagination-progress" style={{ animationDuration: "10000ms" }}></span>
                    <button aria-label="Go to Slide1">
                      <span className="is-sr-only">Тест слайда 1</span>
                    </button>
                  </li>
                  <li className="carousel__pagination-item" data-qa="cl-p-item2">
                    <span className="carousel__pagination-progress"></span>
                    <button aria-label="Go to Slide2">
                      <span className="is-sr-only">Тест слайда 2</span>
                    </button>
                  </li>
                  <li className="carousel__pagination-item" data-qa="cl-p-item3">
                    <span className="carousel__pagination-progress"></span>
                    <button aria-label="Go to Slide3">
                      <span className="is-sr-only">Тест слайда 3</span>
                    </button>
                  </li>
                </ul>
                <button data-qa="cl-n-next" tabIndex="0" className="carousel__navigation-next">
                  <svg aria-label="Наступний слайд" role="img" className="icon icon--chevron">
                    <use xlinkHref="#icon-chevron" href="#icon-chevron"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className="component component--transporter">
              <div data-qa="tpm" className="transporter-module">
                <div data-qa="tpm-head" className="transporter__head">
                  <div data-qa="tpm-title" className="transporter__heading">
                    <h2>  НОВІ <br />ЗАСОБИ </h2>
                  </div>
                  <div data-qa="tpm-desc" className="transporter__description"></div>
                  <div data-qa="tpm-cta" className="transporter__cta">
                    <a href="/usi-produkty" aria-label="Усі продукти НОВІ ЗАСОБИ" className="link link--arrow-right link--circled">
                      <span className="link__label">Усі продукти</span>
                      <svg aria-hidden="true" className="icon icon--arrow">
                        <use xlinkHref="#icon-arrow" href="#icon-arrow"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <div data-qa="" role="group" aria-roledescription="Карусель" className="transporter" navigation="true">
                  <span className="cause-page-divider">
                    <svg width="1324" height="10" viewBox="0 0 1324 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="divider desktop mobile">
                      <g mask="url(#my94kno7ba)" fillRule="evenodd" clipRule="evenodd">
                        <path d="m249 0 17.855 10h64.739L337 0h-88zM831 0l17.855 10h64.7" />
                        {/* ... Additional content if necessary ... */}
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SECTION-1 */}
      <section id="ot-pc-lst" className="ot-hide ot-pc-scrollbar ot-enbl-chr">
        <div className="ot-lst-cntr ot-pc-scrollbar">
          <div id="ot-pc-hdr">
            <div id="ot-lst-title">
              <button className="ot-link-btn back-btn-handler" aria-label="Back">
                <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve">
                  <title>Back Button</title>
                  <g>
                    <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835 l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425 c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564 s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978 L213.13,222.409z"></path>
                  </g>
                </svg>
              </button>
              <h3>Список файлів cookie</h3>
            </div>
            <div className="ot-lst-subhdr">
              <div id="ot-search-cntr">
                <p role="status" className="ot-scrn-rdr"></p>
                <input id="vendor-search-handler" type="text" name="vendor-search-handler" placeholder="Шукати..." aria-label="Пошук у списку файлів cookie" />
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                  <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                </svg>
              </div>
              <div id="ot-fltr-cntr">
                <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true">
                  <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve">
                    <title>Filter Button</title>
                    <g>
                      <path fill="#2c3643" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136 c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083 c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413 C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <section id="ot-lst-cnt" className="ot-pc-scrollbar">
            <div className="ot-sdk-row">
              <div className="ot-sdk-column">
                <div id="ot-sel-blk">
                  <div className="ot-sel-all">
                    <div className="ot-sel-all-hdr">
                      <span className="ot-consent-hdr">Consent</span>
                      <span className="ot-li-hdr">Leg.Interest</span>
                    </div>
                    <div className="ot-sel-all-chkbox">
                      <div className="ot-chkbox" id="ot-selall-hostcntr">
                        <input id="select-all-hosts-groups-handler" type="checkbox" />
                        <label htmlFor="select-all-hosts-groups-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                      <div className="ot-chkbox" id="ot-selall-vencntr">
                        <input id="select-all-vendor-groups-handler" type="checkbox" />
                        <label htmlFor="select-all-vendor-groups-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                      <div className="ot-chkbox" id="ot-selall-licntr">
                        <input id="select-all-vendor-leg-handler" type="checkbox" />
                        <label htmlFor="select-all-vendor-leg-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                    </div>
                  </div>
                  <ul id="ot-host-lst"></ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* SECTION-2 */}
      <section id="ot-fltr-modal">
        <div id="ot-fltr-cnt">
          <button id="clear-filters-handler">Clear</button>
          <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
            <div className="ot-fltr-opts">
              <div className="ot-fltr-opt">
                <div className="ot-chkbox">
                  <input id="chkbox-id" type="checkbox" className="category-filter-handler" />
                  <label htmlFor="chkbox-id">
                    <span className="ot-label-txt">checkbox label</span>
                  </label>
                  <span className="ot-label-status">label</span>
                </div>
              </div>
            </div>
            <div className="ot-fltr-btns">
              <button id="filter-apply-handler">Apply</button>
              <button id="filter-cancel-handler">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer role="contentinfo" className="footer">
        <div className="footer__links">
          <div className="footer__main-links">
            <ul>
              <li><a href="/faq">Поширені запитання</a></li>
              <li><a href="/storinka-poshuku">Пошук</a></li>
              <li><a href="/storinka-karty-saitu">Карта сайту</a></li>
            </ul>
          </div>
          <div className="footer__other-links">
            <ul>
              <li>
                <a href="https://www.loreal.com/en/ukraine/pages/group/privacy-policy-ukraine/">
                  Політика конфіденційності
                </a>
              </li>
              <li>
                <a href="/umovy-vikoristannya">
                  Умови використання
                </a>
              </li>
              <li>
                <button className="optanon-toggle-display">Налаштування файлів cookie</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a href="https://www.facebook.com/MaybellineNYUkraine" target="_blank" rel="nofollow">
                <svg role="img" aria-label="Facebook" className="icon icon--social icon--facebook icon--color">
                  <use xlinkHref="#icon-facebook"></use>
                </svg>
                <svg role="img" aria-label="Facebook" className="icon icon--social icon--grey-facebook icon--grey">
                  <use xlinkHref="#icon-grey-facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mu_inthecitystyle_ua/" target="_blank" rel="nofollow">
                <svg role="img" aria-label="Instagram" className="icon icon--social icon--instagram icon--color">
                  <use xlinkHref="#icon-instagram"></use>
                </svg>
                <svg role="img" aria-label="Instagram" className="icon icon--social icon--grey-instagram icon--grey">
                  <use xlinkHref="#icon-grey-instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCBrSRYMUnHsLpAECE2NfgXQ" target="_blank" rel="nofollow">
                <svg role="img" aria-label="YouTube" className="icon icon--social icon--youtube icon--color">
                  <use xlinkHref="#icon-youtube"></use>
                </svg>
                <svg role="img" aria-label="YouTube" className="icon icon--social icon--grey-youtube icon--grey">
                  <use xlinkHref="#icon-grey-youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__disclaimer">
          <span>© 2024 Maybelline New York</span>
          Цей сайт призначений для споживачів в Україні. Використовуються файли cookie та пов’язані технології для реклами. Щоб дізнатися більше або відмовитися, подивись AdChoices і нашу Політику конфіденційності.
        </div>
        <div className="footer__country-region">
          <div data-qa="crs" className="country-region-selector">
            <div data-qa="country-region-selector" className="crs-component">
              <button className="crs-show-modal">
                <span className="crs-flag">
                  <img src="/-/media/project/loreal/brand-sites/mny/emea/ua/homepage/navigation/footer/ukraine.png?rev=83d23976b08448a99fbcebc1963d98a4&amp;cx=0&amp;cy=0&amp;cw=225&amp;ch=225&amp;hash=4216CAC92CE5DCC1FCCADA23CEB8D99A" alt="Україна" />
                </span>
                <span>Україна</span>
                <svg aria-hidden="true" aria-label="Закрити" width="9" height="6" className="icon icon-bold-chevron">
                  <use xlinkHref="#icon-bold-chevron"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
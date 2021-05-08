import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="+7 (999) 123-45-67"
        paragraph="Развитие нового бизнеса никогда не бывает легким, но стартап всегда готов помочь."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Схема" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="We have the tools to help you suceed"
        subtitle="Startup is perfect for helping to to start and grow your business. As
          you begin to gain new clients and expand you will see the benefits of
          a super-fast Gatsby website"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Сверхбыстрая скорость увеличивается"
            title="Быстро"
            content="Сверхбыстрое время отклика гарантирует, что ваш бизнес не пострадает"
          />
          <Perk
            img={perk2Img}
            alt="Будет большая экономия"
            title="Доступно"
            content="Выбор пакетов для любого типа и размера бизнеса"
          />
          <Perk
            img={perk3Img}
            alt="Сверхбыстрая скорость увеличивается"
            title="Дружелюбный"
            content="Консультанты, которые доступны 24/7, все со специальными знаниями"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Наши пакеты"
        para="Выберите идеальное решение для вас. Преимущества для любого бюджета Стартап может предложить удивительную ценность и советы экспертов."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
    </>
  )
}

export default HomePage

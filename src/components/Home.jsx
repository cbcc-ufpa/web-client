import React from "react";
import "./Home.css";
import AreaCard from "./AreaCard";
import CommentsCard from "./CommentsCard";
import MemberCard from "./MemberCard";

//SVG's
import Lupa from "../assets/lupa.svg";
import Star from "../assets/star.svg";
import Arrow from "../assets/arrow.svg";
import ArrowLilac from "../assets/arrow_lilac.svg";
import IA from "../assets/ia_perfil.svg";
import Network from '../assets/network.svg'
import Devops from '../assets/devops.svg'
import Dev from '../assets/dev.svg'
import AI from '../assets/ia.svg'
import Data from '../assets/data.svg'
import Shild from '../assets/shild.svg'
import User from '../assets/user.svg'
import Map from '../assets/map.png'
import Wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="header_icon">
          <div></div>
        </div>
        <div className="header_links">
          <a href="https://github.com/jonas-al">Home</a>
          <a href="https://github.com/jonas-al">Features</a>
          <a href="https://github.com/jonas-al">Pricing</a>
          <a href="https://github.com/jonas-al">About Us</a>

          {/*<img src={Lupa} alt="LupaIcon" />*/}
        </div>
      </header>

      <main>
        <div className="container_home">
          <div className="content_home">
            <div className="localization">
              <img src={Star} alt="Star Icon" />
              <p>LOCALIZAÇÃO</p>
            </div>
            <h1>Lorem ipsum pellentesque nunc sapien</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque, animi vitae placeat pariatur blanditiis nostrum. Quaerat
              quo perferendis ut a, beatae in voluptas assumenda sit,
              voluptatibus, ipsam totam accusamus quod!
            </p>
            <a href="https://github.com/jonas-al">
              <p>Nos Conheça</p>
              <img src={Arrow} alt="Arrow Icon" />
            </a>
            <div className="social_links">
              <a href="https://github.com/jonas-al" target="_blank" rel="extern">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.5 13C15.9021 15.0801 14.1417 16.6175 12 16.93C10.3431 17.1704 8.6599 16.7249 7.33887 15.6963C6.01784 14.6678 5.17322 13.1452 5.00001 11.48C4.86575 9.80729 5.43811 8.15481 6.57821 6.9235C7.7183 5.6922 9.32194 4.9946 11 4.99998C11.7778 5.00107 12.5482 5.15041 13.27 5.43998C13.5056 5.54573 13.7829 5.45473 13.91 5.22998L15.35 2.57998C15.4126 2.4567 15.4235 2.31357 15.3804 2.18221C15.3372 2.05086 15.2435 1.9421 15.12 1.87998C11.9765 0.45674 8.32132 0.75474 5.44986 2.66837C2.57839 4.582 0.896415 7.84084 1.00001 11.29C1.20423 16.5122 5.35132 20.7199 10.57 21C16.0612 21.2435 20.7196 17.0094 21 11.52V9.51998C20.9947 9.24607 20.7739 9.0253 20.5 9.01998H11.5C11.2239 9.01998 11 9.24384 11 9.51998V12.52C11 12.7961 11.2239 13.02 11.5 13.02H16.5" />
                </svg>
              </a>

              <a href="https://github.com/jonas-al" target="_blank" rel="extern">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.01"
                    x="24"
                    y="24"
                    width="24"
                    height="24"
                    transform="rotate(180 24 24)"
                    fill="#7A5AF8"
                  />
                  <path d="M15.15 8.40006C13.6021 8.39475 12.1156 9.00526 11.0182 10.097C9.92084 11.1888 9.30269 12.6721 9.30005 14.2201V20.1001C9.30005 20.3388 9.39487 20.5677 9.56365 20.7365C9.73244 20.9052 9.96135 21.0001 10.2 21.0001H12.3C12.7971 21.0001 13.2 20.5971 13.2 20.1001V14.2201C13.1997 13.6687 13.4338 13.1433 13.8441 12.775C14.2544 12.4067 14.802 12.2304 15.35 12.2901C16.356 12.4168 17.108 13.2762 17.1 14.2901V20.1001C17.1 20.5971 17.503 21.0001 18 21.0001H20.1C20.5971 21.0001 21 20.5971 21 20.1001V14.2201C20.9974 12.6721 20.3793 11.1888 19.2819 10.097C18.1845 9.00526 16.698 8.39475 15.15 8.40006V8.40006Z" />
                  <rect x="3" y="9.30005" width="4.5" height="11.7" rx="0.9" />
                  <circle cx="5.25" cy="5.25" r="2.25" />
                </svg>
              </a>

              <a href="https://github.com/jonas-al" target="_blank" rel="extern">
                <svg
                  width="11"
                  height="19"
                  viewBox="0 0 11 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1.50003C11 1.22389 10.7761 1.00003 10.5 1.00003H8C5.37932 0.869487 3.14528 2.88012 3 5.50003V8.20003H0.5C0.223858 8.20003 0 8.42389 0 8.70003V11.3C0 11.5762 0.223858 11.8 0.5 11.8H3V18.5C3 18.7762 3.22386 19 3.5 19H6.5C6.77614 19 7 18.7762 7 18.5V11.8H9.62C9.84874 11.8033 10.0505 11.6509 10.11 11.43L10.83 8.83003C10.8703 8.6803 10.8389 8.52034 10.7449 8.397C10.6509 8.27366 10.5051 8.2009 10.35 8.20003H7V5.50003C7.05154 4.98713 7.48452 4.59745 8 4.60003H10.5C10.7761 4.60003 11 4.37617 11 4.10003V1.50003Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero_rigth">
            <img src={IA} alt="IA Perfil" />
          </div>
        </div>

        <img src={Wave} alt="Wave"  className="wave"/>

      </main>

      <div className="main_areas">
        <div className="phone"></div>

        <div className="info_areas">
          <div className="info_cards">
            <AreaCard icon={Network} title={"Redes de Computadores"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
            <AreaCard icon={Devops} title={"DevOps"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
            <AreaCard icon={Dev} title={"Programação"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
          </div>

          <div className="info_cards">
            <AreaCard icon={AI} title={"Inteligência Artificial"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
            <AreaCard icon={Data} title={"Ciência de Dados"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
            <AreaCard icon={Shild} title={"Segurança da Informação"} text={"Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons"} />
          </div>
        </div>
      </div>

      {/*<div className="big_circle"></div>*/}

      <div className="main_questions">
        <p>Centro Acadêmico</p>
        <h1>Saiba com quem tirar dúvidas</h1>
        <div className="up">
          <MemberCard memberPhoto={User} memberName={"Samuel Willson"} memberJob={"Digital Artist"} />
          <MemberCard memberPhoto={User} memberName={"Angelina Hellhop"} memberJob={"UX/UI Designer"} />
          {/*<MemberCard memberPhoto={User} memberName={"Kyle Generale"} memberJob={"Photographer"} />
          <MemberCard memberPhoto={User} memberName={"Joey Taylor"} memberJob={"Chief SMM"} />*/}
        </div>

        <div className="down">
          <MemberCard memberPhoto={User} memberName={"Samuel Willson"} memberJob={"Digital Artist"} />
          <MemberCard memberPhoto={User} memberName={"Angelina Hellhop"} memberJob={"UX/UI Designer"} />
          {/*<MemberCard memberPhoto={User} memberName={"Kyle Generale"} memberJob={"Photographer"} />
          <MemberCard memberPhoto={User} memberName={"Joey Taylor"} memberJob={"Chief SMM"} />*/}

        </div>
      </div>

      {/*<div className="big_circle2"></div>
      <div className="small_cicle"></div>*/}

      <div className="main_comments">
        <h1>Comentários de recém formados em CBCC</h1>
        <div className="comments_section">
          <div className="arrow_right">
            <img src={ArrowLilac} alt="Arrow Icon" />
          </div>

          {/*<CommentsCard
            comment={"Antes eu sofriah :,( ... agora eu sou friah"}
            userName={"Gótica Taradah"}
            userJob={"Digital Artist at Digital Group"}
    userPhoto={User} />*/}

          {/*<CommentsCard 
            comment={"Puta, vagabunda, intere$$eira. Eu fazendo meu trabalho escutando só besteira"}
            userName={"Luiza Sonza"}
            userJob={"UX Designer at Digital Group"}
    userPhoto={User} />*/}

          <CommentsCard
            comment={"Antes eu não era nada, agora sou Uber e garanto o pão de cada dia"}
            userName={"Resque"}
            userJob={"Photographer at Digital Group"}
            userPhoto={User}/>

          <div className="arrow_left">
            <img src={ArrowLilac} alt="Arrow Icon" />
          </div>
        </div>
      </div>

      <div className="main_map">
        <h1>Mapa da Casa do Caralho aqui!!!</h1>
        <img src={Map} alt="Map image" />
      </div>

      <div className="main_claim">
        <h1>Tem alguma ideia ou reclamação?</h1>
        <p>Nos diga sua opnião no que podemos fazer para melhorar o curso. Problemas com docentes, laboratórios, sugestão de atividade para o Centro acadêmico, tudo é bem vindo aqui :D</p>
        <div className="username_typecomment">
          <input type="text" className="user_name" placeholder="Username" />
          <select>
            <option value="" disabled selected>Selecione o tipo do comentário</option>
            <option value="valor1">Feedback</option>
            <option value="valor2">Sugestão de Atividade</option>
            <option value="valor3">Corpo Docente</option>
            <option value="valor3">Infraestrutura</option>
          </select>
        </div>
        <textarea name="" id="" cols="30" rows="10" className="user_comment" placeholder="Escreva aqui..."></textarea>
        <p id="p_warning">Essa mensagem é anônima, não se preocupe, se identifique se quiser</p>
        <button onClick={() => alert("Mensagem enviada")}>Enviar Feedback</button>
      </div>
    </div>
  );
};

export default Home;

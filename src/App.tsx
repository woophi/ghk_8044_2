import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ExclamationCircleMIcon } from '@alfalab/icons-glyph/ExclamationCircleMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import hbImg from './assets/hb.png';
import lockImg from './assets/lock.svg';
import { avaSlides, boardSlides, figSlides, phoneSlides } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'alfabank://sdui_screen?endpoint=v1%2Fgrowthhack-widget-experiment%2Fwidgets%2F0c1eaaaa-f56e-4e81-8f3a-1043f0025e0f&presentationTypeWeb=PRESENT&title=%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B&screenName=loyalty_1_final';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.boxHero}>
          <div>
            <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" weight="bold">
              Альфа-Шахматы
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="secondary">
              Сезон только начался
            </Typography.Text>
          </div>
          <img
            src={hbImg}
            alt="HB"
            width="100%"
            height={260}
            style={{ objectFit: 'cover', transform: 'scale(1.1)', margin: '-1rem 0 1rem' }}
          />
          <PureCell className={appSt.bannerCell}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="secondary">
                  Получите все сезонные награды: рамки профиля, расцветки досок и фигуры
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              <ExclamationCircleMIcon color="#898991" />
            </PureCell.Graphics>
          </PureCell>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <Swiper slidesPerView="auto" spaceBetween={8} slidesOffsetAfter={20}>
            {phoneSlides.map((slide, index) => (
              <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                <div className={appSt.slidePhone}>
                  <img src={slide.img} alt={`Phone Slide ${index + 1}`} width={200} />
                  <div>
                    <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <Typography.Text view="primary-small" color="secondary">
                      {slide.text}
                    </Typography.Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={appSt.boxAccess}>
          <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
            Сезонный пропуск
          </Typography.TitleResponsive>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Рамки аватаров
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 20
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Уникальная рамка за каждый уровень мастерства
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {avaSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <div className={appSt.slideAva}>
                    <Typography.TitleResponsive tag="h3" view="small" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <div style={{ height: '80px', margin: `${index > 6 ? '-20px' : '0'} auto 0` }}>
                      <img src={slide.img} alt={`Avatar Slide ${index + 1}`} width={80} />
                    </div>
                    <div className={appSt.row} style={{ marginTop: 'auto' }}>
                      <Typography.Text view="primary-small" color="secondary">
                        Уровень {index + 1}
                      </Typography.Text>
                      <img src={lockImg} alt="Lock" width={28} height={28} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Наборы досок
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 5
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              5 разных настроений игры
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {boardSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <img src={slide.img} alt={`Board Slide ${index + 1}`} width={100} height={100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <div className={appSt.row}>
              <Typography.Text view="primary-large" weight="medium">
                Наборы фигур
              </Typography.Text>

              <div className={appSt.tag}>
                <Typography.Text view="primary-small" color="secondary">
                  0 из 6
                </Typography.Text>
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              Армия со своим характером
            </Typography.Text>
          </div>

          <div>
            <Swiper slidesPerView="auto" spaceBetween={8}>
              {figSlides.map((slide, index) => (
                <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                  <img src={slide.img} alt={`Figure Slide ${index + 1}`} width={100} height={100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Gap size={96} />
        </div>
      </div>

      <div className={appSt.bottomBtn}>
        <Button
          block
          view="primary"
          loading={loading}
          onClick={submit}
          style={{ borderRadius: '2rem' }}
          hint="Шахматы + Сезонный пропуск"
          size={72}
        >
          Играть за 399 ₽
        </Button>
      </div>
    </>
  );
};

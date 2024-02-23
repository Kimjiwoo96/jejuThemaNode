import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import ApplyStyle from '../../scss/bine/Apply.module.scss'
import { myApi } from "../../api/api"



const StyledButton = styled.button`
  width: 50%;
  height: 45px;
  background: var(--main_color2);
  border: 0;
  outline: 0;
  border: 40px;
  cursor: pointer;
  border-radius: 40px;
  display: block;
  margin: auto;
  color: var(--contents_bg_color);
  font-size: 1.2em;
  font-weight: 600;
`;


function Apply({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const [dataUp, setDataUp] = useState(false);


  // const myForm = async () => {
  //   const myFormDataGet = await myApi("form_apply")
  //   console.log(myFormDataGet)
  // };

  // useEffect(() => {
  //   myForm();
  // }, [dataUp])



  const onSubmit = async (data) => {

    const myFormDataPost = await myApi("form_apply", data)
    console.log(myFormDataPost)

    setDataUp(!dataUp)
  }

  return (
    <div className={`${ApplyStyle.apply} ${className}`}>
      <div className='container text-center text-lg-end'>
        <div className={`${ApplyStyle.wrap} position-relative d-inline-block text-start`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>신청하기</h2>
            <p className='position-absolute'>
              정보를 입력해주시면 추첨을 통해서<br />
              제주항공권 + 렌트카 or 숙소 <strong>할인쿠폰</strong>을 드립니다.
            </p>

            <div className={ApplyStyle.box}>
              <label htmlFor="name">이름</label>
              <input type='text' placeholder='이름을 입력하세요.' {...register("name", { required: true })} />
              {errors.name && <span>이름을 입력하세요.</span>}
            </div>

            <div className={ApplyStyle.box}>
              <label htmlFor="phone">연락처</label>
              <input type='number' placeholder='연락처를 입력하세요.' {...register("phone", { required: true })} />
              {errors.phone && <span>연락처를 입력하세요.</span>}
            </div>

            <div className={ApplyStyle.box}>
              <label htmlFor="email">이메일</label>
              <input type='email' placeholder='이메일을 입력하세요.' {...register("email", { required: true })} />
              {errors.email && <span>이메일을 입력하세요.</span>}
            </div>

            <div className={ApplyStyle.agree}>
              <label>
                <input type="checkbox" required /> 개인정보수집 이용 동의
              </label>
              {errors.agreement && <span>동의가 필요합니다.</span>}
            </div>

            <StyledButton type="submit">보내기</StyledButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Apply;

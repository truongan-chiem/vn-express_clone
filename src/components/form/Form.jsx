import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './form.scss';
const Form = () => {
    const [isLogin, setIsLogin] = useState(true);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Không đúng định dạng Email!').required('Bắt buộc!'),
            password: Yup.string()
                .required('Bắt buộc!')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    'Tối thiểu 8 kí tự , ít nhất 1 chữ hoa, 1 chữ thường và 1 số !',
                ),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            alert('Đăng nhập thành công');
            resetForm();
        },
    });
    return (
        <div className="form">
            <div className="form__header">
                <button
                    onClick={() => setIsLogin(true)}
                    className={`form__header__title ${isLogin ? 'active' : ''}`}
                >
                    Đăng nhập
                </button>
                <button
                    onClick={() => setIsLogin(false)}
                    className={`form__header__title ${!isLogin ? 'active' : ''}`}
                >
                    Tạo tài khoản
                </button>
            </div>
            <div className="form__content">
                <div className="form__content__login">
                    <h2>Đăng nhập với email</h2>
                    <form
                        className="form__content__login__container"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="form__content__login__container__input">
                            <input
                                name="email"
                                type="text"
                                id="email"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label htmlFor="email">Email</label>
                            <span className={`error ${formik.errors.email ? 'active' : ''}`}>
                                {formik.errors.email}
                            </span>
                        </div>
                        <br />
                        <div className="form__content__login__container__input">
                            <input
                                name="password"
                                type="password"
                                id="pw"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <label htmlFor="pw">Mật khẩu</label>
                            <span className={`error ${formik.errors.password ? 'active' : ''}`}>
                                {formik.errors.password}
                            </span>
                        </div>
                        <br />

                        <div className="form__content__login__container__action">
                            <button>Đăng nhập</button>
                            <button>Lấy lại mật khẩu</button>
                        </div>
                    </form>
                </div>

                <div className="form__content__link">
                    <h2>Đăng nhập với</h2>
                    <button className="fb">
                        <i className="bx bxl-facebook-circle"></i>
                        <span>Facebook</span>
                    </button>
                    <button className="google">
                        <i className="bx bxl-google"></i>
                        <span>Google</span>
                    </button>
                    <button className="apple">
                        <i className="bx bxl-apple"></i>
                        <span>Apple</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;

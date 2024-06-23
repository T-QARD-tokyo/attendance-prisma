"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from "next/router";
import styles from './Login.module.css';

// 型宣言
type Inputs = {
    username: string;
    password: string;
}

export default function Signin() {
    const router = useRouter();
    // errorMsg という名前の state 関数を宣言、初期値 null をセット
    const [errorMsg, setErrorMsg] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Inputs>({
        mode: 'onChange',
    });

    // ログインボタンを押した際の処理
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        if (data.username === "user" && data.password === "password") {  // 仮ID・パスワード
            loginSuccess();
        } else {
            loginErrorMsg();
        }
        reset();
    };

    // ログインに成功した場合、次のページへ遷移
    const loginSuccess = () => {
        router.push("/attendance/checkin");
    }

    // ログインに失敗した場合のエラーメッセージをセット
    const loginErrorMsg = () => {
        // setErrorMsg()で errorMsg の値を更新
        setErrorMsg("ユーザーIDもしくはパスワードが間違っています。");
    }

    // 入力内容をクリア
    const clearForm = () => {
        reset();
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/T-QARD.png" alt="t-qard" />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={styles.heading}>ログイン</h1>
                    <hr />
                    <div className={styles.uiForm}>
                        <p className={styles.errorMsg}>{errorMsg}</p>
                        <div className={styles.formField}>
                            <label htmlFor="userID">ユーザーID</label>
                            <input
                                id="userID"
                                type="text"
                                placeholder='userID'
                                {...register('username', {
                                    required: 'ユーザーIDを入力してください。',
                                    maxLength: {
                                        value: 20,
                                        message: '20文字以内で入力してください。',
                                    },
                                    pattern: {
                                        value: /^[A-Za-z0-9-]+$/i,
                                        message: 'ユーザーIDの形式が不正です。',
                                    },
                                })}
                            />
                        </div>
                        <ErrorMessage errors={errors} name="username" render={({ message }) => <span>{message}</span>} />
                        <div className={styles.formField}>
                            <label htmlFor="password">パスワード</label>
                            <input
                                id="password"
                                type="password"
                                placeholder='password'
                                role='password'
                                {...register('password', {
                                    required: 'パスワードを入力してください。',
                                    maxLength: {
                                        value: 20,
                                        message: '20文字以内で入力してください',
                                    },
                                    pattern: {
                                        value: /^[A-Za-z0-9]+$/i,
                                        message: 'パスワードの形式が不正です。',
                                    },
                                })}
                            />
                        </div>
                        <ErrorMessage errors={errors} name="password" render={({ message }) => <span>{message}</span>} />
                        <div className={styles.loginButton}>
                            <button
                                type="submit"
                                className={styles.submitButton}
                            >ログイン
                            </button>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={clearForm}
                            >クリア
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

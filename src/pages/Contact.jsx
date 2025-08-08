import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import ProfileImage from '../components/ProfileImage';
import SocialLink from '../components/SocialLink';

const Contact = () => {
    const [status, setStatus] = useState("idle");
    const { t } = useTranslation();

    const [isAvailable, setIsAvailable] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/getAvailability')
            .then(res => res.json())
            .then(data => {
                setIsAvailable(data.isAvailable);
                setLoading(false);
            })
            .catch(() => {
                setIsAvailable(false);
                setLoading(false);
            });
    }, []);

    const schema = yup.object().shape({
        firstName: yup.string().required(t('contact.form.firstNameRequired')).min(2, t('contact.form.minLength').replace('{{length}}', '2')),
        lastName: yup.string(),
        email: yup.string().email(t('contact.form.emailInvalid')).required(t('contact.form.emailRequired')),
        subject: yup.string().required(t('contact.form.subjectRequired')).min(3, t('contact.form.minLength').replace('{{length}}', '3')),
        message: yup.string().required(t('contact.form.messageRequired')).min(10, t('contact.form.minLength').replace('{{length}}', '10'))
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try {
            setStatus("sending");

            const data = new FormData();
            data.append("form-name", "contact");
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            await fetch("/", {
                method: "POST",
                body: data
            });

            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };


    const buttonText = {
        idle: t('contact.form.submit'),
        sending: t('contact.form.sending'),
        success: t('contact.form.success'),
        error: t('contact.form.error'),
    };

    const buttonColors = {
        idle: 'from-primary to-accent',
        sending: 'from-blue-500 to-blue-700',
        success: 'from-green-500 to-green-700',
        error: 'from-red-500 to-red-700'
    };

    const buttonIcon = {
        idle: null,
        sending: '/icons/sending.svg',
        success: '/icons/like.svg',
        error: '/icons/dislike.svg'
    };

    return (
        <section id="contact" className="py-32 px-8 max-w-7xl mx-auto scroll-animate">
            <Section title={t('contact.title')} />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
                {/* Contact Info */}
                <div className="lg:col-span-2">
                    <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl border border-dark-border p-20 h-full flex flex-col justify-between min-h-[600px] relative overflow-hidden">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="text-center flex-shrink-0">
                                <div className="flex justify-center mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                                        <ProfileImage
                                            src="/img/profile.png"
                                            alt="Profile"
                                            size="medium"
                                            className="relative z-10"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-gradient-primary mb-4">
                                    Nahuel Gonzalez
                                </h3>
                            </div>

                            <div className="flex-shrink-0 pt-8">
                                <div className="flex justify-center gap-6">
                                    <SocialLink
                                        href="https://github.com/Nahuel-70"
                                        icon="/icons/github.svg"
                                        label="GitHub"
                                        className='invert'
                                    />
                                    <SocialLink
                                        href="mailto:nahuelgonzalezmartins@gmail.com"
                                        icon="/icons/gmail.svg"
                                        label="Gmail"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl border border-dark-border p-8 min-h-[600px] relative overflow-hidden">
                        <div className="relative z-10 h-full">
                            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                                <span
                                    className={`w-4 h-4 rounded-full animate-pulse ${isAvailable ? "bg-green-500" : "bg-danger"
                                        }`}
                                    style={{
                                        boxShadow: isAvailable
                                            ? "0 0 10px 3px rgba(34, 197, 94, 0.8)"
                                            : "0 0 10px 3px rgba(239, 68, 68, 0.8)"
                                    }}
                                ></span>
                                {loading ? t('contact.status.loading') : (
                                    isAvailable
                                        ? t('contact.status.available')
                                        : t('contact.status.unavailable')
                                )}
                            </h3>

                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-6 h-full flex flex-col"
                            >
                                {/* Campo oculto para que Netlify detecte el form */}
                                <input type="hidden" name="form-name" value="contact" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1">
                                        <input
                                            {...register("firstName")}
                                            name="firstName"
                                            placeholder={t('contact.form.firstName')}
                                            className="input"
                                            aria-invalid={!!errors.firstName}
                                        />
                                        {errors.firstName && (
                                            <p className="text-danger text-sm ml-2 mt-0.5">{errors.firstName.message}</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <input
                                            {...register("lastName")}
                                            name="lastName"
                                            placeholder={t('contact.form.lastName')}
                                            className="input"
                                            aria-invalid={!!errors.lastName}
                                        />
                                        {errors.lastName && (
                                            <p className="text-danger text-sm ml-2 mt-0.5">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 mt-6">
                                    <input
                                        {...register("email")}
                                        name="email"
                                        placeholder={t('contact.form.email')}
                                        className="input"
                                        aria-invalid={!!errors.email}
                                    />
                                    {errors.email && (
                                        <p className="text-danger text-sm ml-2 mt-0.5">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1 mt-6">
                                    <input
                                        {...register("subject")}
                                        name="subject"
                                        placeholder={t('contact.form.subject')}
                                        className="input"
                                        aria-invalid={!!errors.subject}
                                    />
                                    {errors.subject && (
                                        <p className="text-danger text-sm ml-2 mt-0.5">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1 mt-6">
                                    <textarea
                                        {...register("message")}
                                        name="message"
                                        placeholder={t('contact.form.message')}
                                        rows={6}
                                        className="input"
                                        aria-invalid={!!errors.message}
                                    />
                                    {errors.message && (
                                        <p className="text-danger text-sm ml-2 mt-0.5">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading || !isAvailable || status === 'sending'}
                                    className={`w-full py-4 px-8 font-semibold text-lg rounded-2xl mt-auto transition-all duration-300 relative overflow-hidden group bg-gradient-to-r ${buttonColors[status]} text-white hover:scale-105 disabled:cursor-not-allowed`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {status !== 'idle' && (
                                            <img
                                                src={buttonIcon[status]}
                                                className={`brightness(0) invert(1) w-6 h-6 ${status === 'success' ? 'animate-[pulseSuccess_1s_ease-out]' : ''} ${status === 'error' ? 'animate-[pulseError_1s_ease-out]' : ''}`}
                                                alt=""
                                            />
                                        )}
                                        {buttonText[status]}
                                    </span>
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

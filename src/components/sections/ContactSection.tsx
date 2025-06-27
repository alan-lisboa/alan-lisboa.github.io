import { useTranslation } from "react-i18next";
import {
  User,
  AtSign,
  Github,
  Linkedin,
  Twitter,
  Send,
  RedoIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import Plunk from '@plunk/node';
import { useToast } from '@/hooks/use-toast';
import { render } from '@react-email/render';

interface SendEmailFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendEmailFormData>();

  const onSubmit = async (data: SendEmailFormData) => {
    let api_key = import.meta.env.VITE_PLUNK_API_KEY;

    if (!api_key) {
      toast({
        title: t("contact.email.sendErrorTitle"),
        description: t("contact.email.sendErrorDescription"),
        variant: "destructive"
      });
      return;
    }

    reset();

    const body = `
      <span><strong>Name:</strong></span>
      <span>${data.name}</span><br />
      <span><strong>Email:</strong></span>
      <span>${data.email}</span><br />
      <span><strong>Message:</strong></span><br />
      <span>${data.message}</span>
    `

    const plunk = new Plunk(api_key);

    const result = await plunk.emails.send({
      to: 'alan.lisboa@outlook.com',
      subject: `Contact from ${data.name} at alanlisboa.dev`,
      body: body
    });

    if (result.success) {
      toast({
        title: t("contact.email.sentTitle"),
        description: t("contact.email.sentDescription")
      });
    }
  };

  const contactLinks = [
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "@alanlisboa",
      href: "https://x.com/alanlisboa",
      color: "text-portfolio-teal",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/alan-lisboa",
      href: "https://github.com/alan-lisboa",
      color: "text-portfolio-dark",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/alan-lisboa-silveira",
      href: "https://linkedin.com/in/alan-lisboa-silveira",
      color: "text-portfolio-blue",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-8">
            {t("contact.letsTalk")}
          </h2>

          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            {t("contact.interesting")}
            <br />
            {t("contact.channels")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`${contact.color} mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <IconComponent size={40} className="mx-auto" />
                  </div>

                  <h3 className="text-xl font-semibold text-portfolio-dark mb-2">
                    {contact.label}
                  </h3>

                  <p className="text-gray-600 group-hover:text-portfolio-blue transition-colors duration-200">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-4">
              {t("contact.directMessage")}
            </h3>
            <p className="text-gray-600 mb-6">{t("contact.writeMessage")}</p>

            <form
              className="space-y-4 text-left"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-1 text-left">
                <Label htmlFor="name">{t("contact.email.name")}</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  {...register("name", {
                    required: t("contact.email.nameRequired"),
                  })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">{t("contact.email.address")}</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: t("contact.email.addressRequired"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("contact.email.addressInvalid"),
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">{t("contact.email.message")}</Label>
                <Textarea
                  name="message"
                  id="message"
                  {...register("message", {
                    required: t("contact.email.messageRequired"),
                    minLength: {
                      value: 30,
                      message: t("contact.email.messageInvalid"),
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div className="text-right">
                <Button
                  type="submit"
                  className="inline-block bg-portfolio-blue text-white px-8 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 mt-5"
                >
                  <div className="relative">
                    <Send className="absolute" />
                    <span className="ps-6">{t("contact.sendEmail")}</span>
                  </div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

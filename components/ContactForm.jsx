'use client';
import Image from "next/image";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { InlineWidget } from "react-calendly";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_APP_SERVICE_ID,
      process.env.NEXT_PUBLIC_APP_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        alert('message sent successfully....');
        console.log(result.text);

        window.location.href = 'https://www.destineddrivers.com';
      },
    (error) => {
      console.log(error.text);
    }
    );
  }



  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-white">
       <InlineWidget 
        url="https://calendly.com/defideveric/schedule-a-destined-driver"
        styles={{
          height: '700px',
          minWidth: '420px',
          alignItems: 'center',
          }}
        pageSettings={{
          backgroundColor: 'ffffff',
          primaryColor: '00a2ff',
          textColor:'4d5055'
        }}
       />
      </main>
    </>
    
  );
}

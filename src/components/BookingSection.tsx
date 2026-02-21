"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

const BookingSection = () => {
    return (
        <section id="agenda" className="py-24 bg-[#0a0b10]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gold-text-gradient">
                        Reserva tu Web Strategy Call
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Agenda una sesión estratégica gratuita de 15 minutos. Analizaremos tu presencia digital actual y trazaremos la ruta para maximizar tu ROI con una web de alta gama.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-[#0a0b10] overflow-hidden shadow-2xl gold-glow p-1 md:p-4">
                    <InlineWidget
                        url="https://calendly.com/jslunaadrada/30min"
                        styles={{
                            minWidth: "320px",
                            height: "700px",
                        }}
                        pageSettings={{
                            backgroundColor: "0a0b10",
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: "f2b90d",
                            textColor: "ffffff",
                            locale: "es",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingSection;

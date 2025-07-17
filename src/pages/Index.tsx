import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthModal } from "@/components/AuthModal";
import { Wrench, Users, Star, Shield, Clock, MapPin, LogIn, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  const services = [
    { icon: Wrench, name: "Plomberie", description: "Réparations et installations" },
    { icon: Users, name: "Électricité", description: "Travaux électriques certifiés" },
    { icon: Star, name: "Menuiserie", description: "Aménagements sur mesure" },
    { icon: Shield, name: "Jardinage", description: "Entretien espaces verts" },
  ];

  const features = [
    { icon: Clock, title: "Disponible 24h/7j", description: "Des professionnels toujours prêts à intervenir" },
    { icon: Star, title: "Professionnels certifiés", description: "Tous nos prestataires sont vérifiés et qualifiés" },
    { icon: MapPin, title: "Partout en France", description: "Service disponible dans toute la France" },
    { icon: Shield, title: "Paiement sécurisé", description: "Transactions protégées et garanties" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="DOMO" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DOMO
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <AuthModal>
                <Button variant="ghost" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Connexion
                </Button>
              </AuthModal>
              
              <AuthModal>
                <Button variant="hero" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Inscription
                </Button>
              </AuthModal>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Trouvez le bon
                <span className="bg-gradient-primary bg-clip-text text-transparent"> professionnel</span>
                <br />près de chez vous
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                DOMO connecte les particuliers avec des artisans qualifiés pour tous vos projets de rénovation, 
                dépannage et aménagement. Simple, rapide et sécurisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AuthModal>
                  <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                    Trouver un professionnel
                  </Button>
                </AuthModal>
                <AuthModal>
                  <Button size="lg" variant="accent" className="text-lg px-8 py-6">
                    Devenir prestataire
                  </Button>
                </AuthModal>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="Professionnel DOMO au travail" 
                className="rounded-2xl shadow-card w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-accent-foreground rounded-full p-2">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Note moyenne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nos services populaires
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés pour tous vos besoins domestiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir DOMO ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme conçue pour votre tranquillité d'esprit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de clients satisfaits qui ont trouvé leur professionnel sur DOMO
          </p>
          <AuthModal>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Créer mon compte gratuitement
            </Button>
          </AuthModal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={logo} alt="DOMO" className="h-8 w-8 brightness-0 invert" />
            <span className="text-2xl font-bold">DOMO</span>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto">
            La plateforme de référence pour connecter particuliers et professionnels du bâtiment. 
            Simple, rapide et sécurisé.
          </p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/50">&copy; 2024 DOMO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

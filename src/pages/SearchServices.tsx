import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Filter,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Car,
  Home,
  Phone,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import logoRed from "@/assets/logo-red.png";

interface Prestataire {
  id: string;
  name: string;
  speciality: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  distance: string;
  availability: string;
  description: string;
  avatar: string;
  verified: boolean;
  responseTime: string;
  location: string;
}

const mockPrestataires: Prestataire[] = [
  {
    id: "1",
    name: "Kofi Asante",
    speciality: "Plomberie",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: "15 000 FCFA",
    distance: "2.3 km",
    availability: "Disponible aujourd'hui",
    description: "Plombier expérimenté, spécialisé dans les réparations d'urgence et installations sanitaires.",
    avatar: "",
    verified: true,
    responseTime: "< 1h",
    location: "Cocody, Abidjan"
  },
  {
    id: "2", 
    name: "Aisha Traoré",
    speciality: "Électricité",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: "20 000 FCFA",
    distance: "1.8 km",
    availability: "Disponible demain",
    description: "Électricienne certifiée avec 10 ans d'expérience. Installation et dépannage électrique.",
    avatar: "",
    verified: true,
    responseTime: "< 30min",
    location: "Plateau, Abidjan"
  },
  {
    id: "3",
    name: "Mamadou Kone", 
    speciality: "Menuiserie",
    rating: 4.7,
    reviewCount: 156,
    hourlyRate: "18 000 FCFA",
    distance: "3.1 km",
    availability: "Disponible cette semaine",
    description: "Menuisier artisan, créateur de meubles sur mesure et aménagements intérieurs.",
    avatar: "",
    verified: true,
    responseTime: "< 2h",
    location: "Marcory, Abidjan"
  },
  {
    id: "4",
    name: "Fatou Diallo",
    speciality: "Nettoyage",
    rating: 4.9,
    reviewCount: 203,
    hourlyRate: "8 000 FCFA",
    distance: "1.2 km",
    availability: "Disponible aujourd'hui",
    description: "Service de nettoyage professionnel pour particuliers et bureaux. Matériel fourni.",
    avatar: "",
    verified: true,
    responseTime: "< 15min",
    location: "Treichville, Abidjan"
  }
];

const services = [
  { id: "plomberie", name: "Plomberie", icon: Wrench },
  { id: "electricite", name: "Électricité", icon: Zap },
  { id: "peinture", name: "Peinture", icon: Paintbrush },
  { id: "menuiserie", name: "Menuiserie", icon: Hammer },
  { id: "auto", name: "Mécanique Auto", icon: Car },
  { id: "menage", name: "Ménage", icon: Home },
];

export default function SearchServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [filteredPrestataires, setFilteredPrestataires] = useState(mockPrestataires);

  const handleSearch = () => {
    let filtered = mockPrestataires;
    
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedService) {
      filtered = filtered.filter(p => 
        p.speciality.toLowerCase() === selectedService.toLowerCase()
      );
    }
    
    setFilteredPrestataires(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logoRed} alt="DOMO" className="h-8 w-8" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  DOMO
                </span>
              </Link>
              <div className="hidden md:flex items-center text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Recherche de services</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost">
                Mes demandes
              </Button>
              <Button variant="outline">
                Devenir prestataire
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-gradient-hero py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Trouvez le professionnel qu'il vous faut
            </h1>
            <p className="text-xl text-muted-foreground">
              Plus de 500 professionnels vérifiés en Côte d'Ivoire
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-soft hover:-translate-y-1 ${
                  selectedService === service.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedService(selectedService === service.name ? "" : service.name)}
              >
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search Filters */}
          <Card className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un service ou professionnel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Choisir une zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cocody">Cocody</SelectItem>
                  <SelectItem value="plateau">Plateau</SelectItem>
                  <SelectItem value="marcory">Marcory</SelectItem>
                  <SelectItem value="treichville">Treichville</SelectItem>
                  <SelectItem value="yopougon">Yopougon</SelectItem>
                  <SelectItem value="adjame">Adjamé</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Note</SelectItem>
                  <SelectItem value="price">Prix</SelectItem>
                  <SelectItem value="availability">Disponibilité</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleSearch} className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredPrestataires.length} professionnel{filteredPrestataires.length > 1 ? 's' : ''} trouvé{filteredPrestataires.length > 1 ? 's' : ''}
            </h2>
            {selectedService && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedService}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-auto p-0"
                  onClick={() => setSelectedService("")}
                >
                  ×
                </Button>
              </Badge>
            )}
          </div>

          <div className="grid gap-6">
            {filteredPrestataires.map((prestataire) => (
              <Card key={prestataire.id} className="hover:shadow-soft transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={prestataire.avatar} />
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {prestataire.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{prestataire.name}</h3>
                          {prestataire.verified && (
                            <Badge variant="secondary" className="text-xs">
                              ✓ Vérifié
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-primary font-medium mb-2">{prestataire.speciality}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{prestataire.rating}</span>
                            <span>({prestataire.reviewCount} avis)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{prestataire.distance} • {prestataire.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Répond en {prestataire.responseTime}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm">
                          {prestataire.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-primary">{prestataire.hourlyRate}</p>
                        <p className="text-sm text-muted-foreground">par heure</p>
                        <Badge 
                          variant="outline" 
                          className={`mt-2 ${
                            prestataire.availability.includes('aujourd\'hui') 
                              ? 'border-green-200 text-green-700 bg-green-50' 
                              : 'border-orange-200 text-orange-700 bg-orange-50'
                          }`}
                        >
                          {prestataire.availability}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Contacter
                        </Button>
                        <Button variant="outline" className="w-full">
                          Voir le profil
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
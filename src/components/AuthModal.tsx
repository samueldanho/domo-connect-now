import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, UserPlus, Mail, Lock, Phone, Building } from "lucide-react";

interface AuthModalProps {
  children: React.ReactNode;
}

export function AuthModal({ children }: AuthModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'client' | 'prestataire'>('client');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    toast({
      title: authMode === 'login' ? 'Connexion réussie !' : 'Inscription réussie !',
      description: `Bienvenue ${userType === 'client' ? 'cher client' : 'cher prestataire'} (${email})`,
    });
    
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {authMode === 'login' ? 'Connexion' : 'Inscription'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {authMode === 'login' 
              ? 'Connectez-vous à votre compte DOMO' 
              : 'Créez votre compte DOMO'}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={userType} onValueChange={(value) => setUserType(value as 'client' | 'prestataire')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Client
            </TabsTrigger>
            <TabsTrigger value="prestataire" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Prestataire
            </TabsTrigger>
          </TabsList>

          <TabsContent value="client" className="mt-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Espace Client</CardTitle>
                <CardDescription>
                  Trouvez facilement des professionnels qualifiés pour vos projets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="client-email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {authMode === 'register' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="client-name">Nom complet</Label>
                        <Input
                          id="client-name"
                          name="name"
                          placeholder="Jean Dupont"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="client-phone">Téléphone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="client-phone"
                            name="phone"
                            type="tel"
                            placeholder="06 12 34 56 78"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="client-password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="client-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {authMode === 'login' ? 'Se connecter' : "S'inscrire"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prestataire" className="mt-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Espace Prestataire</CardTitle>
                <CardDescription>
                  Développez votre activité en rejoignant notre réseau de professionnels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="prestataire-email">Email professionnel</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="prestataire-email"
                        name="email"
                        type="email"
                        placeholder="contact@monentreprise.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {authMode === 'register' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="prestataire-company">Nom de l'entreprise</Label>
                        <Input
                          id="prestataire-company"
                          name="company"
                          placeholder="Mon Entreprise SARL"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prestataire-name">Nom du responsable</Label>
                        <Input
                          id="prestataire-name"
                          name="name"
                          placeholder="Jean Dupont"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prestataire-phone">Téléphone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="prestataire-phone"
                            name="phone"
                            type="tel"
                            placeholder="01 23 45 67 89"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prestataire-speciality">Spécialité</Label>
                        <Input
                          id="prestataire-speciality"
                          name="speciality"
                          placeholder="Plomberie, Électricité, etc."
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="prestataire-password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="prestataire-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="accent" className="w-full" size="lg">
                    {authMode === 'login' ? 'Se connecter' : "S'inscrire"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-6">
          <Button
            variant="ghost"
            onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
          >
            {authMode === 'login' 
              ? 'Pas de compte ? Inscrivez-vous' 
              : 'Déjà un compte ? Connectez-vous'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
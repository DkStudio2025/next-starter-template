import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Server,
  Smartphone,
  Globe,
  Database,
  Shield,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">DevServices</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Servicios
            </Link>
            <Link href="#precios" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Precios
            </Link>
            <Link href="#sobre-mi" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Sobre Mí
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Consulta Gratis</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">✨ Desarrollo Web Profesional</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transformo tus ideas en
                  <span className="text-blue-600"> soluciones digitales</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Diseñador web, programador y técnico en sistemas con experiencia en desarrollo completo. Creo sitios
                  web modernos, aplicaciones y soluciones técnicas personalizadas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Ver Mis Trabajos
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Consulta Gratuita
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Años Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Desarrollador trabajando"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Servicios</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Soluciones Completas para tu Negocio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrezco servicios integrales de desarrollo web, desde el diseño hasta la implementación y mantenimiento de
              sistemas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Globe className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Desarrollo Web</CardTitle>
                <CardDescription>Sitios web modernos y responsivos con las últimas tecnologías</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diseño responsive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización SEO
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Carga rápida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Seguridad avanzada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Smartphone className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Aplicaciones Web</CardTitle>
                <CardDescription>Aplicaciones web interactivas y funcionales para tu negocio</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    React/Next.js
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    PHP personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    APIs REST
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integración de pagos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Server className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Administración de Servidores</CardTitle>
                <CardDescription>Configuración y mantenimiento de servidores y hosting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Configuración Linux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización rendimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Backups automáticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoreo 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                  <Database className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Bases de Datos</CardTitle>
                <CardDescription>Diseño e implementación de bases de datos eficientes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    MySQL/PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización consultas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Migración de datos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Respaldos seguros
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <Shield className="h-8 w-8 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Seguridad Web</CardTitle>
                <CardDescription>Protección y auditorías de seguridad para tu sitio web</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificados SSL
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Firewall configuración
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Auditorías seguridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Actualizaciones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                  <Code className="h-8 w-8 text-teal-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Soporte Técnico</CardTitle>
                <CardDescription>Mantenimiento y soporte continuo para tus proyectos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Soporte 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Actualizaciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Resolución rápida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consultoría técnica
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Precios</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Planes Adaptados a tu Presupuesto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu proyecto. Todos incluyen soporte y garantía.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Básico */}
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Básico</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $299
                  <span className="text-lg font-normal text-gray-600">/proyecto</span>
                </div>
                <CardDescription>Perfecto para sitios web simples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Hasta 5 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Diseño responsive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Optimización SEO básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Formulario de contacto</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>1 mes de soporte</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline">
                  Comenzar Proyecto
                </Button>
              </CardContent>
            </Card>

            {/* Plan Profesional */}
            <Card className="relative border-2 border-blue-500 hover:shadow-xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Profesional</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  $599
                  <span className="text-lg font-normal text-gray-600">/proyecto</span>
                </div>
                <CardDescription>Ideal para negocios en crecimiento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Hasta 15 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Diseño personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>CMS integrado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Optimización avanzada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Integración redes sociales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>3 meses de soporte</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">Comenzar Proyecto</Button>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $1,299
                  <span className="text-lg font-normal text-gray-600">/proyecto</span>
                </div>
                <CardDescription>Soluciones completas para empresas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Páginas ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Aplicación web completa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Base de datos personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Panel de administración</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Integración APIs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>6 meses de soporte</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline">
                  Consultar Proyecto
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Necesitas algo personalizado?</p>
            <Button variant="outline" size="lg">
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Sobre Mí</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Pasión por la Tecnología y el Desarrollo</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Soy un desarrollador full-stack con más de 5 años de experiencia en el mundo del desarrollo web. Mi
                  formación como técnico en sistemas me ha dado una base sólida para entender tanto el frontend como el
                  backend de las aplicaciones.
                </p>
                <p>
                  Me especializo en crear soluciones web modernas utilizando tecnologías como React, Next.js, PHP, y
                  bases de datos. También tengo experiencia en administración de servidores Linux y optimización de
                  rendimiento.
                </p>
                <p>
                  Mi objetivo es ayudar a empresas y emprendedores a llevar sus ideas al mundo digital con soluciones
                  eficientes, seguras y escalables.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• React & Next.js</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• JavaScript/TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• PHP & Laravel</li>
                    <li>• Node.js</li>
                    <li>• MySQL & PostgreSQL</li>
                    <li>• APIs REST</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Desarrollador profesional"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Testimonios</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Lo que Dicen Mis Clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excelente trabajo, muy profesional y cumplió con todos los tiempos establecidos. El sitio web quedó
                  exactamente como lo imaginaba."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">María Rodríguez</div>
                    <div className="text-sm text-gray-600">CEO, Boutique Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "La aplicación web que desarrolló para nuestra empresa ha mejorado significativamente nuestros
                  procesos internos. Muy recomendado."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">JL</span>
                  </div>
                  <div>
                    <div className="font-semibold">Juan López</div>
                    <div className="text-sm text-gray-600">Director, TechSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Soporte técnico excepcional. Siempre disponible para resolver cualquier duda y mantener nuestro sitio
                  funcionando perfectamente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">AG</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ana García</div>
                    <div className="text-sm text-gray-600">Fundadora, StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-white/20 text-white mb-4">Contacto</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">¿Listo para Comenzar tu Proyecto?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Conversemos sobre tu idea y cómo puedo ayudarte a hacerla realidad. Ofrezco consulta gratuita para
                  todos los proyectos.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">contacto@devservices.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Ubicación</div>
                    <div className="text-blue-100">Trabajo remoto - Disponible globalmente</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Link
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Envíame un Mensaje</CardTitle>
                <CardDescription className="text-blue-100">
                  Cuéntame sobre tu proyecto y te responderé en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Nombre</label>
                    <Input
                      placeholder="Tu nombre"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Tipo de Proyecto</label>
                  <select className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white">
                    <option value="">Selecciona una opción</option>
                    <option value="web">Sitio Web</option>
                    <option value="app">Aplicación Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="servidor">Administración Servidor</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Mensaje</label>
                  <Textarea
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Button className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">DevServices</span>
              </div>
              <p className="text-gray-400">Transformando ideas en soluciones digitales innovadoras y eficientes.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aplicaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Servidores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} DevServices. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

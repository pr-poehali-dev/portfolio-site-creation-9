import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'portfolio', label: 'Портфолио', icon: 'FolderOpen' },
    { id: 'methodology', label: 'Методические разработки', icon: 'BookOpen' },
    { id: 'achievements', label: 'Учебные достижения', icon: 'Award' },
    { id: 'extracurricular', label: 'Внеурочная деятельность', icon: 'Users' },
    { id: 'projects', label: 'Проектная деятельность', icon: 'Lightbulb' },
    { id: 'targeted', label: 'Адресная работа', icon: 'Target' },
    { id: 'parents', label: 'Для родителей', icon: 'Heart' },
    { id: 'development', label: 'Непрерывность развития', icon: 'TrendingUp' },
  ];

  const downloadableResources = [
    { title: 'Рабочие программы по предмету', type: 'PDF', size: '2.5 МБ' },
    { title: 'Презентации к урокам', type: 'PPTX', size: '45 МБ' },
    { title: 'Дидактические материалы', type: 'ZIP', size: '12 МБ' },
    { title: 'Тесты и контрольные работы', type: 'DOCX', size: '3.2 МБ' },
  ];

  const achievements = [
    { title: 'Победитель конкурса "Учитель года"', year: '2023', category: 'Региональный' },
    { title: 'Грант "Лучший педагог"', year: '2022', category: 'Муниципальный' },
    { title: 'Сертификат повышения квалификации', year: '2023', category: 'Федеральный' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold font-serif text-white mb-2">
                Профессиональное портфолио педагога
              </h1>
              <p className="text-slate-300 text-lg">
                Савельев Владимир Сергеевич • Учитель русского языка и литературы • МАОУ СШ "Перспектива"
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Badge variant="outline" className="bg-slate-800 text-white border-slate-600">
                20+ лет опыта
              </Badge>
              <Badge variant="outline" className="bg-slate-800 text-white border-slate-600">
                Высшая категория
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="User" size={24} />
                  <span>О педагоге</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Опытный педагог с 20-летним стажем работы в области математического образования. 
                  Специализируюсь на разработке инновационных методик обучения, внедрении 
                  современных образовательных технологий и индивидуальном подходе к каждому ученику.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">350+</div>
                    <div className="text-sm text-slate-600">Выпускников</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">15</div>
                    <div className="text-sm text-slate-600">Побед в олимпиадах</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">8</div>
                    <div className="text-sm text-slate-600">Публикаций</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">95%</div>
                    <div className="text-sm text-slate-600">Успеваемость</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="Award" size={24} />
                  <span>Достижения и награды</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                      <Icon name="Medal" size={20} className="text-yellow-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                          <span className="text-sm text-slate-600">{achievement.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="Lightbulb" size={24} />
                  <span>Проектная деятельность</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      "Математика вокруг нас"
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Межпредметный проект для учащихся 7-8 классов, направленный на 
                      применение математических знаний в повседневной жизни.
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">7-8 класс</Badge>
                      <Badge variant="secondary" className="text-xs">Межпредметный</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      "Цифровая математика"
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Проект по внедрению IT-технологий в преподавание математики 
                      с использованием интерактивных платформ.
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">9-11 класс</Badge>
                      <Badge variant="secondary" className="text-xs">IT-технологии</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="Mail" size={24} />
                  <span>Контактная информация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-slate-600" />
                  <span className="text-sm text-slate-700">m.ivanova@school15.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-slate-600" />
                  <span className="text-sm text-slate-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-slate-600" />
                  <span className="text-sm text-slate-700">г. Москва, ул. Школьная, 15</span>
                </div>
              </CardContent>
            </Card>

            {/* Downloadable Resources */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="Download" size={24} />
                  <span>Материалы для скачивания</span>
                </CardTitle>
                <CardDescription>
                  Методические разработки для коллег
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {downloadableResources.map((resource, index) => (
                  <div key={index}>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto p-3 border-slate-200 hover:bg-slate-50"
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <Icon name="FileText" size={16} className="text-slate-600" />
                        <div className="flex-1 text-left">
                          <div className="font-medium text-sm text-slate-900">
                            {resource.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {resource.type} • {resource.size}
                          </div>
                        </div>
                        <Icon name="Download" size={14} className="text-slate-400" />
                      </div>
                    </Button>
                    {index < downloadableResources.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Icon name="ExternalLink" size={24} />
                  <span>Полезные ресурсы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Globe" size={16} className="mr-2" />
                  Официальный сайт школы
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Электронный журнал
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Users" size={16} className="mr-2" />
                  Родительский чат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-300">
              © 2024 Профессиональное портфолио педагога. Все права защищены.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Последнее обновление: январь 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
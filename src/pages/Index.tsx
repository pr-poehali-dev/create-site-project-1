import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [onlinePlayers, setOnlinePlayers] = useState(187);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [selectedDonate, setSelectedDonate] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    fetchServerStats();
    const interval = setInterval(fetchServerStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchServerStats = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/1652722e-fe56-488e-85ad-144d1a307f9e');
      const data = await response.json();
      setOnlinePlayers(data.online);
      setRecentPurchases(data.purchases);
    } catch (error) {
      console.error('Error fetching server stats:', error);
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'asuxadmin2024') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setActiveSection('admin');
    } else {
      alert('Неверный пароль');
    }
  };



  const donateOptions = [
    { 
      name: 'CHRISTMAS', 
      price: 399, 
      features: ['❄️ Снежный эффект при ходьбе', '🎄 Новогодний префикс', '⛄ Спавн снеговика-помощника', '🎁 Эксклюзивный кит Christmas', 'Приват 8 регионов', '5 домов'], 
      isLimited: true,
      limitedUntil: '31 января',
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/618e11e8-748c-4285-b2b1-c9298ef454d1.jpg'
    },
    { 
      name: 'PRAVITEL', 
      price: 49, 
      features: ['Цветной ник', 'Приват 2 региона', '1 дом', 'Кит Pravitel'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/429a27d6-7983-43ed-85fe-0dbbb665f748.jpg'
    },
    { 
      name: 'VLASTELIN', 
      price: 89, 
      features: ['Цветной ник + префикс', 'Приват 4 региона', '2 дома', 'Кит Vlastelin', 'Телепорт к игрокам'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/7876c212-daa6-4d0b-b5f5-3a91b5d8d9d6.jpg'
    },
    { 
      name: 'ELYTRIUM', 
      price: 149, 
      features: ['Градиентный ник', 'Приват 7 регионов', '3 дома', 'Кит Elytrium', 'Полёт 20 мин/день', 'Смена погоды'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/b19c1c4b-1e9c-4f1e-af53-c4d11ff298f4.jpg'
    },
    { 
      name: 'XOZYAIN', 
      price: 219, 
      features: ['Анимированный ник + префикс', 'Приват 12 регионов', '6 домов', 'Кит Xozyain', 'Полёт 60 мин/день', 'Варп на базу'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/b6269cb4-8b7f-4c16-94b0-e3f0da13defa.jpg'
    },
    { 
      name: 'MOROK', 
      price: 500, 
      features: ['Легендарный ник + префикс', 'Приват 20 регионов', '10 домов', 'Кит Morok', 'Безлимитный полёт', 'Невидимость', 'Создание варпов'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/8c425247-076c-40bf-8870-fcd40bdb3c6d.jpg'
    },
    { 
      name: 'CUSTOM', 
      price: 500, 
      features: ['Индивидуальный донат', 'Выбери свои привилегии', 'Свой префикс', 'Уникальные возможности'],
      image: 'https://cdn.poehali.dev/projects/005b4f93-75ef-4197-8d61-44e9c26cf1f4/files/4dad6187-67be-47f8-88e6-d8ce5e9d28b2.jpg'
    },
  ];

  const chatRules = [
    { code: '1.1', text: 'Спам (флуд)', punishment: 'мут на 30 мин' },
    { code: '1.1.2', text: 'Пиар проектов (серверов, чатов, читов и т.д)', punishment: 'бан навсегда' },
    { code: '1.2', text: 'Массивное оскорбление', punishment: 'мут на 1 час' },
    { code: '1.3', text: 'Организация флуда в чате с помощью опроса', punishment: 'мут на 4 часа' },
    { code: '1.4', text: 'Упоминание родителей', punishment: 'мут на 7 дней' },
    { code: '1.4.1', text: 'Оскорбление проекта и модераторов сервера', punishment: 'мут на 12 часов' },
  ];

  const mainRules = [
    { code: '1.5', text: 'Использование читов', punishment: '14 дней бан' },
    { code: '1.5.1', text: 'Тим с читером', punishment: 'бан на 8 дней' },
    { code: '1.5.2', text: 'Клан читеров', punishment: 'бан на 14 дней каждого' },
    { code: '1.6', text: 'Признание в использовании читов', punishment: '12 дней бан' },
    { code: '1.7', text: 'Ставить похожий ник как у администрации и ютуберов', punishment: 'бан навсегда' },
    { code: '1.8', text: 'Использование дудос пакетов', punishment: 'бан на 28 дней' },
    { code: '1.8.1', text: 'Попытка краша сервера', punishment: 'бан навсегда' },
    { code: '1.9', text: 'Отказ от проверки', punishment: 'бан на 14 дней' },
    { code: '2.0', text: 'Задерживать модератора во время проверки', punishment: 'бан на 16 дней' },
    { code: '2.1', text: 'Выдавать себя за модерацию проекта', punishment: 'бан на 20 дней' },
    { code: '2.5', text: 'Иметь больше 5 аккаунтов в бане', punishment: 'бан на 14 дней каждый новый аккаунт' },
  ];

  const moderatorRules = [
    { code: '2.2', text: 'Некорректный тп', punishment: 'варн' },
    { code: '2.3', text: 'Взятка', punishment: 'снятие' },
    { code: '2.4', text: 'Выдавать игрокам админские предметы/бафы', punishment: 'варн' },
    { code: '2.5', text: 'Некорректный мут', punishment: 'варн' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-2xl">⛏️</div>
              <h1 className="text-2xl font-bold text-primary">AsuxGrief</h1>
            </div>
            <div className="flex gap-2 items-center">
              <Button variant={activeSection === 'home' ? 'default' : 'ghost'} onClick={() => setActiveSection('home')} className="gap-2">
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button variant={activeSection === 'about' ? 'default' : 'ghost'} onClick={() => setActiveSection('about')} className="gap-2">
                <Icon name="Info" size={18} />
                О сервере
              </Button>
              <Button variant={activeSection === 'rules' ? 'default' : 'ghost'} onClick={() => setActiveSection('rules')} className="gap-2">
                <Icon name="Shield" size={18} />
                Правила
              </Button>
              <Button variant={activeSection === 'donate' ? 'default' : 'ghost'} onClick={() => setActiveSection('donate')} className="gap-2">
                <Icon name="Gem" size={18} />
                Донат
              </Button>
              <Button variant={activeSection === 'purchases' ? 'default' : 'ghost'} onClick={() => setActiveSection('purchases')} className="gap-2">
                <Icon name="ShoppingBag" size={18} />
                Покупки
              </Button>
              {isAdmin && (
                <Button variant={activeSection === 'admin' ? 'default' : 'ghost'} onClick={() => setActiveSection('admin')} className="gap-2">
                  <Icon name="Settings" size={18} />
                  Админ
                </Button>
              )}
              {!isAdmin && (
                <Button variant="ghost" size="icon" onClick={() => setShowAdminLogin(true)}>
                  <Icon name="Lock" size={18} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-12">
            <div className="text-center space-y-6 py-20">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border-2 border-primary mb-4">
                <span className="text-primary font-bold">🎮 СЕРВЕР ОТКРЫТ</span>
              </div>
              <h1 className="text-6xl font-extrabold text-foreground leading-tight">
                AsuxGrief
              </h1>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Лучший гриф-сервер Minecraft с уникальными возможностями и дружным комьюнити
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 gap-2">
                  <Icon name="Play" size={20} />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2" asChild>
                  <a href="https://discord.gg/asuxgrief" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} />
                    Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2" asChild>
                  <a href="https://t.me/asuxgrief" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} />
                    Telegram
                  </a>
                </Button>
              </div>
              <div className="flex gap-8 justify-center pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">1500+</div>
                  <div className="text-muted-foreground">Игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Онлайн</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary animate-pulse">{onlinePlayers}</div>
                  <div className="text-muted-foreground">Онлайн сейчас</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">⚔️</div>
                  <CardTitle>PvP Арены</CardTitle>
                  <CardDescription>Сражайся с другими игроками в специальных зонах</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">🏰</div>
                  <CardTitle>Защита территорий</CardTitle>
                  <CardDescription>Приватируй свои постройки от гриферов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">💎</div>
                  <CardTitle>Уникальные киты</CardTitle>
                  <CardDescription>Получай эксклюзивные предметы каждый день</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">О сервере AsuxGrief</h2>
              <p className="text-xl text-muted-foreground">Твой путь к легендарному приключению начинается здесь</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">🎮 Что такое AsuxGrief?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  AsuxGrief - это гриф-сервер нового поколения, где каждый игрок может проявить свои навыки выживания, строительства и PvP-боев. 
                  Мы создали уникальную атмосферу, где разрешено гриферство в специальных режимах, но при этом защищены права обычных игроков.
                </p>
                <p>
                  Сервер работает 24/7 без лагов на мощном хостинге. Регулярные обновления, активная администрация и дружное комьюнити - 
                  всё это делает AsuxGrief лучшим выбором для любителей Minecraft.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" size={24} className="text-primary" />
                    Особенности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <span>Версия 1.16.5 - 1.20.x</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <span>Режимы: Выживание, PvP, Гриф</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <span>Кастомные плагины и механики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <span>Экономика и торговля</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <span>Система кланов и альянсов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Комьюнити
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="MessageCircle" size={20} className="text-primary mt-1" />
                      <span>Активный Discord-сервер</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Calendar" size={20} className="text-primary mt-1" />
                      <span>Еженедельные ивенты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Gift" size={20} className="text-primary mt-1" />
                      <span>Конкурсы и розыгрыши</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Star" size={20} className="text-primary mt-1" />
                      <span>Адекватная администрация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Shield" size={20} className="text-primary mt-1" />
                      <span>Быстрая поддержка 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Правила сервера AsuxGrief</h2>
              <p className="text-xl text-muted-foreground">Настоящий свод правил создан проектом AsuxGrief</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                  Правила чата
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {chatRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="font-mono font-bold text-primary min-w-[60px]">{rule.code}</div>
                      <div className="flex-1">
                        <div className="font-medium mb-1">{rule.text}</div>
                        <div className="text-sm text-destructive">Наказание: {rule.punishment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-primary" />
                  Основные правила
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mainRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="font-mono font-bold text-primary min-w-[60px]">{rule.code}</div>
                      <div className="flex-1">
                        <div className="font-medium mb-1">{rule.text}</div>
                        <div className="text-sm text-destructive">Наказание: {rule.punishment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  Правила для модерации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {moderatorRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="font-mono font-bold text-primary min-w-[60px]">{rule.code}</div>
                      <div className="flex-1">
                        <div className="font-medium mb-1">{rule.text}</div>
                        <div className="text-sm text-destructive">Наказание: {rule.punishment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                  <Icon name="AlertCircle" size={24} />
                  Важно для модерации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Выдавать мут и бан строго по правилам проекта по пунктам (например: 1.2, 1.5 и т.д). 
                  Выдавание наказания не по пункту — варн!
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'donate' && (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Поддержи сервер</h2>
              <p className="text-xl text-muted-foreground">Получи уникальные привилегии и помоги развитию AsuxGrief</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donateOptions.map((option, idx) => (
                <Card key={idx} className={`hover:scale-105 transition-transform ${option.name === 'MOROK' ? 'border-primary border-2' : ''} ${option.isLimited ? 'border-2 border-blue-500 relative overflow-hidden' : ''}`}>
                  {option.isLimited && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-6 -translate-y-1">
                      ⏰ До {option.limitedUntil}
                    </div>
                  )}
                  <CardHeader>
                    {option.image && (
                      <div className="mb-3 -mx-6 -mt-6">
                        <img src={option.image} alt={option.name} className="w-full h-32 object-cover" />
                      </div>
                    )}
                    {option.name === 'MOROK' && (
                      <Badge className="w-fit mb-2 bg-primary">Популярный</Badge>
                    )}
                    {option.name === 'CUSTOM' && (
                      <Badge className="w-fit mb-2 bg-secondary">Новинка</Badge>
                    )}
                    {option.isLimited && (
                      <Badge className="w-fit mb-2 bg-gradient-to-r from-blue-500 to-cyan-400">🎄 Лимитированный</Badge>
                    )}
                    <CardTitle className="text-2xl">{option.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {option.price} ₽
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={option.name === 'MOROK' || option.isLimited ? 'default' : 'outline'}
                      onClick={() => {
                        setSelectedDonate(option);
                        setShowPaymentModal(true);
                      }}
                    >
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Информация о донате
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>✅ Привилегии выдаются автоматически после оплаты</p>
                <p>✅ Донат действует навсегда без продления</p>
                <p>✅ Безопасная оплата через проверенные системы</p>
                <p>✅ Поддержка 24/7 при возникновении проблем</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'purchases' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Последние покупки</h2>
              <p className="text-xl text-muted-foreground">Игроки, которые поддержали AsuxGrief</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingBag" size={24} className="text-primary" />
                  Недавние транзакции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentPurchases.map((purchase, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{purchase.emoji}</div>
                        <div>
                          <div className="font-semibold text-lg">{purchase.username}</div>
                          <div className="text-sm text-muted-foreground">{purchase.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="text-base px-4 py-1">{purchase.donate}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Sparkles" size={24} />
                  Стань частью истории!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Поддержи сервер AsuxGrief и получи эксклюзивные привилегии. Твоя покупка появится в этом списке!
                </p>
                <Button size="lg" onClick={() => setActiveSection('donate')} className="gap-2">
                  <Icon name="Gem" size={20} />
                  Перейти к донатам
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'admin' && isAdmin && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Админ-панель</h2>
              <p className="text-xl text-muted-foreground">Управление балансом и финансами</p>
            </div>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Wallet" size={24} />
                  Баланс проекта
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-8 bg-primary/10 rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">125,430 ₽</div>
                  <div className="text-muted-foreground">Доступно для вывода</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Сегодня</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">12,340 ₽</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">За неделю</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">67,890 ₽</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">За месяц</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">245,670 ₽</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Вывод средств
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Номер карты (российская)</label>
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full p-3 rounded-lg border border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сумма вывода (₽)</label>
                  <input 
                    type="number" 
                    placeholder="10000" 
                    className="w-full p-3 rounded-lg border border-border bg-background"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Вывести средства
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Средства поступят на карту в течение 1-3 рабочих дней
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowAdminLogin(false)}>
          <Card className="w-full max-w-md m-4" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lock" size={24} />
                Вход в админ-панель
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Пароль</label>
                <input 
                  type="password" 
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                  placeholder="Введите пароль"
                  className="w-full p-3 rounded-lg border border-border bg-background"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAdminLogin} className="flex-1">
                  Войти
                </Button>
                <Button onClick={() => setShowAdminLogin(false)} variant="outline" className="flex-1">
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showPaymentModal && selectedDonate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowPaymentModal(false)}>
          <Card className="w-full max-w-lg m-4" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Оплата {selectedDonate.name}</span>
                <Button variant="ghost" size="icon" onClick={() => setShowPaymentModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </CardTitle>
              <CardDescription>
                Сумма к оплате: <span className="text-2xl font-bold text-primary">{selectedDonate.price} ₽</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваш игровой ник</label>
                <input 
                  type="text" 
                  placeholder="Введите ник на сервере"
                  className="w-full p-3 rounded-lg border border-border bg-background"
                />
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-lg">Выберите способ оплаты:</div>
                
                <Button 
                  className="w-full justify-start h-auto p-4 hover:scale-105 transition-transform" 
                  variant="outline"
                  onClick={() => alert('Переход на оплату СБП...')}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="text-4xl">🏦</div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-lg">Система Быстрых Платежей (СБП)</div>
                      <div className="text-sm text-muted-foreground">Оплата через любой российский банк</div>
                    </div>
                    <Icon name="ChevronRight" size={24} />
                  </div>
                </Button>

                <Button 
                  className="w-full justify-start h-auto p-4 hover:scale-105 transition-transform" 
                  variant="outline"
                  onClick={() => alert('Переход на оплату картой...')}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="text-4xl">💳</div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-lg">Банковская карта</div>
                      <div className="text-sm text-muted-foreground">Visa, Mastercard, МИР</div>
                    </div>
                    <Icon name="ChevronRight" size={24} />
                  </div>
                </Button>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Привилегии активируются автоматически</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Безопасная оплата через защищённое соединение</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Поддержка 24/7 в Discord</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 AsuxGrief. Все права защищены.</p>
            <p className="text-sm">Сервер не является официальным продуктом Mojang Studios</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
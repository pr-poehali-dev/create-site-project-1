import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const leaderboardData = [
    { rank: 1, username: 'SteveBuilder', level: 156, kills: 4521, badge: '👑' },
    { rank: 2, username: 'CreeperHunter', level: 142, kills: 4102, badge: '⭐' },
    { rank: 3, username: 'DiamondMiner', level: 138, kills: 3891, badge: '💎' },
    { rank: 4, username: 'EnderDragon', level: 125, kills: 3456, badge: '🔥' },
    { rank: 5, username: 'NetherKing', level: 118, kills: 3201, badge: '⚔️' },
    { rank: 6, username: 'RedstoneWiz', level: 112, kills: 2987, badge: '🎯' },
    { rank: 7, username: 'BlockBreaker', level: 105, kills: 2754, badge: '🏆' },
    { rank: 8, username: 'PvPMaster', level: 98, kills: 2543, badge: '⚡' },
  ];

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
    { name: 'CUSTOM', price: 500, features: ['Индивидуальный донат', 'Выбери свои привилегии', 'Свой префикс', 'Уникальные возможности'] },
  ];

  const rules = [
    { title: 'Запрещено', items: ['Гриферство вне режима', 'Использование читов', 'Оскорбления игроков', 'Реклама других серверов'] },
    { title: 'Разрешено', items: ['PvP в специальных зонах', 'Торговля с игроками', 'Создание кланов', 'Строительство и фермы'] },
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
            <div className="flex gap-2">
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
              <Button variant={activeSection === 'leaderboard' ? 'default' : 'ghost'} onClick={() => setActiveSection('leaderboard')} className="gap-2">
                <Icon name="Trophy" size={18} />
                Рейтинг
              </Button>
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
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                  <Icon name="Users" size={20} />
                  Discord
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
                  <div className="text-4xl font-bold text-primary">200+</div>
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
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Правила сервера</h2>
              <p className="text-xl text-muted-foreground">Соблюдай правила и получай удовольствие от игры</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {rules.map((section, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {section.title === 'Запрещено' ? (
                        <Icon name="Ban" size={24} className="text-destructive" />
                      ) : (
                        <Icon name="CheckCircle" size={24} className="text-primary" />
                      )}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                          {section.title === 'Запрещено' ? (
                            <Icon name="X" size={20} className="text-destructive mt-0.5" />
                          ) : (
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                          )}
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-destructive">
                  <Icon name="AlertTriangle" size={24} />
                  Система наказаний
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-semibold mb-1">Предупреждение (Warn)</div>
                  <div className="text-muted-foreground">За мелкие нарушения: флуд, капс в чате</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-semibold mb-1">Мут (30 мин - 7 дней)</div>
                  <div className="text-muted-foreground">За оскорбления, спам, рекламу</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-semibold mb-1">Бан (1 день - навсегда)</div>
                  <div className="text-muted-foreground">За читы, серьёзный гриф в запрещенных зонах, мошенничество</div>
                </div>
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
                    <Button className="w-full" variant={option.name === 'MOROK' || option.isLimited ? 'default' : 'outline'}>
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

        {activeSection === 'leaderboard' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Таблица лидеров</h2>
              <p className="text-xl text-muted-foreground">Топ игроков сервера AsuxGrief</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {leaderboardData.slice(0, 3).map((player, idx) => (
                <Card key={idx} className={`text-center ${idx === 0 ? 'border-primary border-2 scale-105' : ''}`}>
                  <CardHeader>
                    <div className="text-6xl mb-2">{player.badge}</div>
                    <div className="text-4xl font-bold text-primary">#{player.rank}</div>
                    <CardTitle className="text-xl">{player.username}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Уровень:</span>
                        <span className="font-bold">{player.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Убийств:</span>
                        <span className="font-bold">{player.kills}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Полный рейтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboardData.map((player, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                        idx < 3 ? 'bg-primary/10' : 'bg-muted/50'
                      } hover:bg-muted`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl font-bold ${idx < 3 ? 'text-primary' : 'text-muted-foreground'} w-12`}>
                          #{player.rank}
                        </div>
                        <div className="text-2xl">{player.badge}</div>
                        <div>
                          <div className="font-semibold text-lg">{player.username}</div>
                          <div className="text-sm text-muted-foreground">Уровень {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{player.kills}</div>
                        <div className="text-sm text-muted-foreground">убийств</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

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
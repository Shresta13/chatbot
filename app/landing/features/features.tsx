"use client";

import { Calendar, Users, TrendingUp, Zap, Shield, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Prioritize your tasks in one, organize suggestions to maximize your daily work flow.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share lists and assign tasks individually with your entire team in real and at a scale.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Get visual insights into your daily productivity with beautifully annotated views and reports.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className=" mx-auto max-w-7xl px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
      
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Everything you need to stay organized
          </h2>
          <p className="mt-4 py-2 text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to centralize the tools from your daily workflow.
          </p>
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-transparent to-gray-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

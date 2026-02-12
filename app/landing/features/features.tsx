import { Calendar, Users, TrendingUp } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to stay organized
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to centralize the tools from your daily workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Scheduling */}
          <div className="text-center p-6">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
            <p className="text-muted-foreground">
              Prioritize your tasks in one, organize suggestions to maximize your daily work flow.
            </p>
          </div>

          {/* Team Collaboration */}
          <div className="text-center p-6">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Share lists and assign tasks individually with your entire team in real and at a scale.
            </p>
          </div>

          {/* Progress Tracking */}
          <div className="text-center p-6">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Get visual insights into your daily productivity with beautifully annotated views and reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';


export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/chat">
          <Button
          size="icon"
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Open Chatbox"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

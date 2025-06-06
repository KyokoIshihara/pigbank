import React from 'react';
import { Calendar, MapPin, Ticket, Clock } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function LivePage() {
  const { liveEvents } = useCMS();
  const activeEvents = liveEvents.filter(event => event.isActive);
  const upcomingEvents = activeEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = activeEvents.filter(event => new Date(event.date) < new Date());

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#c22e13] mb-4">Live / Event</h1>
        <p className="text-xl text-gray-700">
          ライブ・イベント情報
        </p>
      </div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#c22e13] mb-8">Upcoming Events</h2>
          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.flyerUrl}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-[#c22e13] mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-5 w-5 mr-3 text-[#c22e13]" />
                        <span className="text-lg">
                          {new Date(event.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            weekday: 'long',
                          })}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 mr-3 text-[#c22e13]" />
                        <div>
                          <div className="text-lg font-medium">{event.venue}</div>
                          <div className="text-sm text-gray-500">{event.location}</div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {event.description}
                    </p>
                    
                    <a
                      href={event.ticketUrl}
                      className="inline-flex items-center px-6 py-3 bg-[#c22e13] text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      <Ticket className="h-5 w-5 mr-2" />
                      チケット情報
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75"
              >
                <img
                  src={event.flyerUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('ja-JP')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
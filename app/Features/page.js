import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-300">Binari Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Send Messages in Binary</h2>
          <p className="text-gray-600">Compose and send messages encoded in binary to ensure secure and unique communication.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Auto-Converter</h2>
          <p className="text-gray-600">Use the built-in auto-converter to decode messages from binary to text or Morse code with ease.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Support for Multiple Formats</h2>
          <p className="text-gray-600">Send and receive messages in text, binary, or Morse code according to your preference.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Email and SMS Integration</h2>
          <p className="text-gray-600">Send messages directly to emails or phone numbers with basic registration.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Educational Tools</h2>
          <p className="text-gray-600">Learn and practice binary, text, and Morse code with interactive tools and tutorials.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

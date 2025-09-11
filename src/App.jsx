import React from 'react';

const App = () => {
  const users = [
    { id: 1, name: "Ali Akmal", position: "Frontend Developer" },
    { id: 2, name: "Malika Qobilova", position: "Backend Developer" },
    { id: 3, name: "Diyorbek Norboyev", position: "UI/UX Designer" },
    { id: 4, name: "Shahlo Islomova", position: "Project Manager" },
    { id: 5, name: "Kamol Abdurahmonov", position: "Full Stack Developer" },
    { id: 6, name: "Xurshid Fayzulloyev", position: "QA Engineer" },
    { id: 7, name: "Madina Jalilova", position: "DevOps Engineer" },
    { id: 8, name: "Sardor Boboyev", position: "Data Scientist" },
    { id: 9, name: "Otabek Soliyev", position: "Product Owner" },
    { id: 10, name: "Gulnora Matmurodova", position: "Marketing Specialist" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .substring(0, 2)
                .toUpperCase()}
            </div>

            <div className="ml-4">
              <h3 className="font-medium text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
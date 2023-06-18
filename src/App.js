import React, { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    text: "State which amongst the following is NOT an advantage of distributed systems?",
    options: [
      "Resource sharing",
      "Incremental growth",
      "Reliability",
      "Process to process communication",
    ],
    answer: "Reliability",
  },
  {
    id: 2,
    text: "Identify the following options if one site fails in a distributed system:",
    options: [
      "The remaining sites can continue operating",
      "Directly connected sites will stop working",
      "All the sites will stop working",
      "A part of sites will be working",
    ],
    answer: "The remaining sites can continue operating",
  },
  {
    id: 3,
    text: "Identify the option below: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility transparency",
      "Concurrency transparency",
      "Replication transparency",
      "Performance transparency",
    ],
    answer: "Mobility transparency",
  },
  {
    id: 4,
    text: "Select the option that distributed systems:",
    options: [
      "High security",
      "Better resource sharing",
      "Better system utilization",
      "Low system overhead",
    ],
    answer: "Better resource sharing",
  },
  {
    id: 5,
    text: "Select what is NOT true about distributed systems:",
    options: [
      "It is a collection of processors",
      "All processors are synchronized",
      "They do not share memory",
      "Process to process communication",
    ],
    answer: "All processors are synchronized",
  },
  {
    id: 6,
    text: "Select which is NOT a characteristic of a distributed system:",
    options: ["Heterogeneity", "Openness", "Scalability", "Global clock"],
    answer: "Global clock",
  },
  {
    id: 7,
    text: "Select what is NOT a major reason for building distributed systems?",
    options: [
      "Resource sharing",
      "Computation speedup",
      "Reliability",
      "Simplicity",
    ],
    answer: "Simplicity",
  },
  {
    id: 8,
    text: "Select which is NOT a design issue in distributed system structure:",
    options: [
      "Scalability",
      "Fault-tolerance",
      "Flexibility",
      "Non-scalability",
    ],
    answer: "Non-scalability",
  },
  {
    id: 9,
    text: "Select which is NOT an advantage of distributed systems over independent PCs:",
    options: [
      "Data sharing",
      "Resource sharing",
      "Communication",
      "Communication, no resource sharing",
    ],
    answer: "Communication, no resource sharing",
  },
  {
    id: 10,
    text: "Identify in a distributed system, each processor has its own:",
    options: [
      "Local memory",
      "Clock",
      "Both local memory and clock",
      "Only cache",
    ],
    answer: "Both local memory and clock",
  },
  {
    id: 11,
    text: "Identify if timestamps of two events are the same, then the events are ___________________",
    options: [
      "Process synchronization",
      "Communication synchronization",
      "Deadlock problem",
      "Power failure",
    ],
    answer: "Deadlock problem",
  },
  {
    id: 12,
    text: "Identify if timestamps of concurrent two events are the same, then the events are:",
    options: ["Concurrent", "Non-concurrent", "Monotonic", "Non-monotonic"],
    answer: "Concurrent",
  },
  {
    id: 13,
    text: 'Justify the correct statement: "If a process is executing in its critical section, ____________________"',
    options: [
      "Any other process can also execute in its critical section",
      "No other process can execute in its critical section",
      "One more process can execute in its critical section",
      "All processes execute",
    ],
    answer: "No other process can execute in its critical section",
  },
  {
    id: 14,
    text: 'Justify the correct statement: "In the token passing approach of distributed systems, processes are organized in a ring structure _______________"',
    options: [
      "Logically",
      "Physically",
      "Both logically and physically",
      "Independently",
    ],
    answer: "Logically",
  },
  {
    id: 15,
    text: "Identify which site an election message is always sent to in a distributed system:",
    options: [
      "Lower numbers",
      "Waiting processes",
      "Requesting lower number of resource",
      "Higher numbers",
    ],
    answer: "Higher numbers",
  },
  {
    id: 16,
    text: "Select the algorithms which are NOT used to handle mutual exclusion in distributed systems:",
    options: ["Centralized", "Token ring", "Distributed", "Non-centralized"],
    answer: "Non-centralized",
  },
  {
    id: 17,
    text: "Justify what logical clock measures:",
    options: [
      "Day time",
      "Night time",
      "Relationship among events",
      "Only event time",
    ],
    answer: "Relationship among events",
  },
  {
    id: 18,
    text: "Identify when resources have multiple instances, ________ can be applied for deadlock avoidance.",
    options: [
      "Bankers algorithm",
      "Resource allocation graph",
      "Semaphores",
      "Dinning philosopher",
    ],
    answer: "Bankers algorithm",
  },
  {
    id: 19,
    text: "Select which algorithm, one process is elected as the coordinator.",
    options: [
      "Distributed mutual exclusion algorithm",
      "Centralized mutual exclusion algorithm",
      "Token ring algorithm",
      "Leaky bucket algorithm",
    ],
    answer: "Centralized mutual exclusion algorithm",
  },
  {
    id: 20,
    text: "Apply the logic to select which principle states that programs, users, and even the systems be given just enough privileges to perform their task?",
    options: [
      "Principle of operating system",
      "Principle of least privilege",
      "Principle of process scheduling",
      "Principle of non-process scheduling",
    ],
    answer: "Principle of least privilege",
  },
  {
    id: 21,
    text: "Select the option where the Bankers algorithm is applied __________",
    options: [
      "To prevent deadlock",
      "To rectify deadlock",
      "To detect deadlock",
      "To solve deadlock",
    ],
    answer: "To prevent deadlock",
  },
  {
    id: 22,
    text: "Identify for system protection, a process should access _____________",
    options: [
      "All the resources",
      "Only those resources for which it has authorization",
      "Few resources but authorization is not required",
      "Only a few resources",
    ],
    answer: "Only those resources for which it has authorization",
  },
  {
    id: 23,
    text: "Choose the option from below the following. In a web-based computing system, the computers used are normally _____?",
    options: ["Servers", "Tablets", "Personal computers", "Network computers"],
    answer: "Network computers",
  },
  {
    id: 24,
    text: "Choose one of the best options from the following. The dump of memory of the computer system is examined by the ___?",
    options: ["Programmer", "Debugger", "Designer", "Engineer"],
    answer: "Debugger",
  },
  {
    id: 25,
    text: "Choose which is a friendly user interface provided by the operating system __________",
    options: [
      "Graphical user interface",
      "Command-line interface",
      "Batch interface",
      "Device interface",
    ],
    answer: "Graphical user interface",
  },
  {
    id: 26,
    text: "Select the below option that microkernel has the responsibility for mapping each virtual _______",
    options: ["Module", "I/O devices", "Memory", "Page"],
    answer: "Page",
  },
  {
    id: 27,
    text: "Choose one of the best options from the following. In a distributed system, information is exchanged through _______",
    options: ["Memory sharing", "Message passing", "Token passing", "Cache"],
    answer: "Message passing",
  },
  {
    id: 28,
    text: "Identify the below option from the following. RPC (Remote Procedure Call) is correlated with the __________",
    options: ["Servers", "Switch", "Hub", "Gateway"],
    answer: "Servers",
  },
  {
    id: 29,
    text: "Select the ___________ layer, which provides the interface that client and server application objects use to interact with each other.",
    options: ["Increasing", "Count", "Bit", "Stub/skeleton"],
    answer: "Stub/skeleton",
  },
  {
    id: 30,
    text: "Select which is not an application of the client and server model ___________",
    options: [
      "World Wide Web",
      "Network printing",
      "Email",
      "Switching of process",
    ],
    answer: "Switching of process",
  },
  {
    id: 31,
    text: "Select that ______________ provides programmers a familiar programming model by extending the local procedure call to a distributed environment.",
    options: [
      "Distributed environment",
      "Permanent procedure call",
      "Process and file",
      "Remote procedure call",
    ],
    answer: "Remote procedure call",
  },
  {
    id: 32,
    text: "Select the option below that an architecture where clients first communicate with the server for data, then format and display it to the users, is known as ___________",
    options: [
      "Client/server architecture",
      "Three-tier architecture",
      "Two-tier architecture",
      "Peer-to-peer architecture",
    ],
    answer: "Peer-to-peer architecture",
  },
  {
    id: 33,
    text: "Select the full form of NTP:",
    options: [
      "Network Time Protocol",
      "New Time Protocol",
      "New Timestamp Protocol",
      "Network Timestamp Protocol",
    ],
    answer: "Network Time Protocol",
  },
  {
    id: 47,
    text: "Evaluate which event is concurrent with the vector clock (2, 8, 4)?",
    options: ["(3,9,5)", "(3,8,4)", "(1,7,3)", "(4,8,2)"],
    answer: "(4,8,2)",
  },
  {
    id: 48,
    text: "Select which is not a feature of cooperative algorithm",
    options: [
      "Complex",
      "Larger overhead",
      "Worst stability",
      "Better stability",
    ],
    answer: "Worst stability",
  },
  {
    id: 49,
    text: "Select in casual consistency model all processes apply shared accesses in",
    options: [
      "Random order",
      "Same order",
      "Sequential order",
      "Specific order",
    ],
    answer: "Same order",
  },
  {
    id: 50,
    text: "Select in which of the following consistency model all writes become perceptible to all processes",
    options: ["Strict", "Weak", "Casual", "Sequential"],
    answer: "Strict",
  },
  {
    id: 51,
    text: 'Analyze properly and complete the statement: "Remote write protocol supports all write operations ______________"',
    options: [
      "Need to be forwarded to local server",
      "Need to be forwarded to multiple servers",
      "Need to be forwarded to any server",
      "Need to be forwarded to a fixed single server",
    ],
    answer: "Need to be forwarded to local server",
  },
  {
    id: 52,
    text: "State transition failures happen when",
    options: [
      "Server fails",
      "Server reacts unexpectedly",
      "Client fails",
      "Network fails",
    ],
    answer: "Server reacts unexpectedly",
  },
  {
    id: 53,
    text: "Choose which is not applicable in distributed file system.",
    options: [
      "File replication",
      "Migration",
      "Client interface",
      "Remote access",
    ],
    answer: "Migration",
  },
  {
    id: 54,
    text: "Select the option below that in a distributed file system, _______ is comparing and mapping between logical and physical objects.",
    options: ["Client interfacing", "Naming", "Migration", "Heterogeneity"],
    answer: "Naming",
  },
  {
    id: 55,
    text: "Select the option below that the kernel mode of an operating system is also defined as",
    options: [
      "User mode",
      "System mode",
      "Supervisor mode",
      "Non-supervising mode",
    ],
    answer: "Supervisor mode",
  },
  {
    id: 56,
    text: "Choose the option that microkernel lends itself to",
    options: ["Computers", "Systems", "Distributed systems", "Applications"],
    answer: "Distributed systems",
  },
  {
    id: 57,
    text: "Choose the option that the microkernel expresses the supports of",
    options: ["Flexibility", "Reliability", "Accessibility", "Rigidity"],
    answer: "Flexibility",
  },
  {
    id: 58,
    text: "Choose the option that thread processor affinity is associated with a set of",
    options: ["Processes", "Processors", "Programs", "Applications"],
    answer: "Processors",
  },
  {
    id: 59,
    text: "Choose the option that in UNIX, a thread is",
    options: ["Runnable", "Executing", "Updated", "Accessed"],
    answer: "Runnable",
  },
  {
    id: 60,
    text: "Choose the option that a microkernel architecture can be considered well in the context of an",
    options: [
      "Object-oriented operating system",
      "Internal device",
      "Interface",
      "Attractive feature",
    ],
    answer: "Object-oriented operating system",
  },
  {
    id: 61,
    text: "Select with a microkernel architecture, it is possible to handle hardware interrupts as",
    options: ["Applications", "Information", "Data", "Messages"],
    answer: "Messages",
  },
  {
    id: 62,
    text: "Choose the Java feature which is used to invoke a method on a remote object?",
    options: [
      "Process Control Block (PCB)",
      "Remote Method Invocation (RMI)",
      "Remote Access Control Block",
      "Resource Allocation Graph",
    ],
    answer: "Remote Method Invocation (RMI)",
  },
  {
    id: 63,
    text: "Select if the master and transaction file have keys in the same order, then it takes",
    options: ["Less time", "More time", "Many hours", "Many days"],
    answer: "Less time",
  },
  {
    id: 64,
    text: "Choose the fastest form of inter-process communication provided in UNIX is decided as",
    options: ["Virtual memory", "Memory", "Shared memory", "Main memory"],
    answer: "Shared memory",
  },
  {
    id: 65,
    text: "Choose the option that processes on remote systems are identified by",
    options: [
      "Host ID",
      "Host name and identifier",
      "Identifier",
      "Process ID",
    ],
    answer: "Host name and identifier",
  },
  {
    id: 66,
    text: "Select the option that the capability of a system to adapt to increased service load is observed as",
    options: ["Scalability", "Tolerance", "Capacity", "Openness"],
    answer: "Scalability",
  },
  {
    id: 67,
    text: "Analyze which is not a major reason for building distributed systems",
    options: [
      "Resource sharing",
      "Computation speedup",
      "Reliability",
      "Simplicity",
    ],
    answer: "Simplicity",
  },
  {
    id: 68,
    text: "Identify connection strategies that are not used in distributed systems",
    options: [
      "Circuit switching",
      "Message switching",
      "Token switching",
      "Packet switching",
    ],
    answer: "Token switching",
  },
  {
    id: 69,
    text: "Identify the common problem found in distributed systems",
    options: [
      "Process synchronization",
      "Communication synchronization",
      "Deadlock problem",
      "Power failure",
    ],
    answer: "Deadlock problem",
  },
  {
    id: 70,
    text: "Select the option below that the size of the monolithic kernel is expressed as .......... than that of a microkernel",
    options: ["Larger", "Smaller", "Medium", "None of these"],
    answer: "Larger",
  },
  {
    id: 71,
    text: "Give an example of a monolithic kernel-based operating system",
    options: ["UNIX", "Linux", "Both UNIX and Linux", "None of these"],
    answer: "Both UNIX and Linux",
  },
  {
    id: 72,
    text: "Give an example of a microkernel-based operating system",
    options: ["Mach", "L4", "Both Mach and L4", "None of these"],
    answer: "Both Mach and L4",
  },
  {
    id: 73,
    text: "Choose the option below that the message passing concept can be assembled in",
    options: [
      "Monolithic kernel",
      "Microkernel",
      "Both monolithic kernel and microkernel",
      "None of these",
    ],
    answer: "Monolithic kernel",
  },
  {
    id: 74,
    text: "Select the option below that the slower execution concept can be developed within",
    options: [
      "Microkernel",
      "Monolithic kernel",
      "Both monolithic kernel and microkernel",
      "None of these",
    ],
    answer: "Microkernel",
  },
  {
    id: 75,
    text: 'Analyze to choose the correct "It is easier to .............. the system if it is done in the form of layers."',
    options: ["Create", "Maintain", "Update", "All of these"],
    answer: "All of these",
  },
  {
    id: 76,
    text: "Select the option below that the highest layer of the layered operating system is identified as",
    options: ["I/O buffer", "User programs", "CPU scheduling", "None of these"],
    answer: "User programs",
  },
  {
    id: 77,
    text: "Select requested resources that are granted with deadlock detection",
    options: ["Resources", "Processes", "Programs", "Data"],
    answer: "Processes",
  },
  {
    id: 78,
    text: "Choose the application for which thread management work is done by a pure kernel-level thread facility?",
    options: ["Kernel", "Program", "Application", "Information"],
    answer: "Kernel",
  },
  {
    id: 79,
    text: "Give an example of a virtual machine",
    options: [
      "DOS virtual machine",
      "Virtual machine",
      "Java virtual machine",
      "None of these",
    ],
    answer: "Java virtual machine",
  },
  {
    id: 80,
    text: "Choose the option below when an attempt is made to make a machine or network resource unavailable to its intended users, the attack is called",
    options: [
      "Denial-of-service attack",
      "Slow read attack",
      "Spoofed attack",
      "Starvation attack",
    ],
    answer: "Denial-of-service attack",
  },
  {
    id: 81,
    text: "Choose the option below that a file type can be recognized by",
    options: [
      "File name",
      "File extension",
      "File identifier",
      "None of these",
    ],
    answer: "File extension",
  },
  {
    id: 82,
    text: "Select the following one that is not the correct benefit of distributed computing",
    options: ["Resource sharing", "Performance", "Availability", "Security"],
    answer: "Security",
  },
  {
    id: 83,
    text: 'Analyze to fill up the with the correct word, "Internet provides _______ for remote login"',
    options: ["Telnet", "HTTP", "FTP", "RPC"],
    answer: "Telnet",
  },
  {
    id: 84,
    text: "Choose the option below that in distributed systems, link and site failure is detected by applying ___________",
    options: ["Polling", "Handshaking", "Token passing", "None of these"],
    answer: "Handshaking",
  },
  {
    id: 85,
    text: "Choose the option below that a network operating system is simulated on",
    options: [
      "Server",
      "Every system in the network",
      "Both server and every system in the network",
      "None of these",
    ],
    answer: "Server",
  },
  {
    id: 86,
    text: "Choose the option below that ____ is a software architecture used to build a distributed system from a network connected by a high-speed network.",
    options: ["DOS", "NOS", "Middleware", "Operating system"],
    answer: "NOS",
  },
  {
    id: 87,
    text: "Choose the following options in a distributed file system, when a file’s physical storage location changes",
    options: [
      "File name needs to be changed",
      "File name need not to be changed",
      "File’s host name needs to be changed",
      "File’s local name needs to be changed",
    ],
    answer: "File name need not to be changed",
  },
  {
    id: 88,
    text: "Select the best option from the following as a primary function of an operating system in a distributed system?",
    options: [
      "Providing a user interface",
      "Managing system resources",
      "Maintaining network security",
      "None of the above",
    ],
    answer: "Managing system resources",
  },
  {
    id: 89,
    text: "Select which of the following is not a feature of distributed operating systems?",
    options: [
      "Transparency",
      "Concurrency",
      "Scalability",
      "Single point of failure",
    ],
    answer: "Single point of failure",
  },
  {
    id: 90,
    text: "Select which of the following is a testing technique used to evaluate the performance of distributed operating systems?",
    options: [
      "Black-box testing",
      "White-box testing",
      "Gray-box testing",
      "Load testing",
    ],
    answer: "Load testing",
  },
  {
    id: 91,
    text: "Select which of the following is an ethical consideration related to the use of distributed operating systems?",
    options: [
      "Resource allocation",
      "System performance",
      "User authentication",
      "Privacy and security",
    ],
    answer: "Privacy and security",
  },
  {
    id: 92,
    text: "Choose the following is a communication protocol used in distributed systems?",
    options: [
      "FTP (File Transfer Protocol)",
      "HTTP (Hypertext Transfer Protocol)",
      "TCP/IP (Transmission Control Protocol/Internet Protocol)",
      "All of the above",
    ],
    answer: "TCP/IP (Transmission Control Protocol/Internet Protocol)",
  },
  {
    id: 93,
    text: "Choose the following is a characteristic of distributed systems?",
    options: [
      "Centralized control",
      "Single point of failure",
      "Resource sharing",
      "Limited scalability",
    ],
    answer: "Resource sharing",
  },
  {
    id: 94,
    text: "Identify the following is a design principle of distributed systems?",
    options: [
      "Tight coupling",
      "Loose coupling",
      "Centralized control",
      "Monolithic architecture",
    ],
    answer: "Loose coupling",
  },
  {
    id: 95,
    text: "Identify the following is a testing technique used to evaluate the reliability of distributed systems?",
    options: [
      "Fault injection testing",
      "White-box testing",
      "Gray-box testing",
      "Boundary value analysis",
    ],
    answer: "Fault injection testing",
  },
  {
    id: 96,
    text: "Select one of the best options from the following as an ethical consideration related to the use of distributed systems?",
    options: [
      "Performance optimization",
      "Resource allocation",
      "User authentication",
      "Encryption standards",
    ],
    answer: "Encryption standards",
  },
  {
    id: 97,
    text: "Select the following is a communication protocol used in distributed systems for remote procedure calls?",
    options: [
      "SOAP (Simple Object Access Protocol)",
      "REST (Representational State Transfer)",
      "JSON-RPC (JavaScript Object Notation Remote Procedure Call)",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 98,
    text: "Select the following is a common challenge faced by distributed operating systems?",
    options: [
      "Resource sharing",
      "User authentication",
      "System security",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 99,
    text: "Choose the following is a technique used to ensure fault tolerance in distributed operating systems?",
    options: [
      "Redundancy",
      "Load balancing",
      "Resource allocation",
      "None of the above",
    ],
    answer: "Redundancy",
  },
  {
    id: 100,
    text: "Choose the following is a testing technique used to evaluate the reliability of distributed operating systems?",
    options: [
      "Regression testing",
      "Performance testing",
      "Fault injection testing",
      "All of the above",
    ],
    answer: "Fault injection testing",
  },
  {
    id: 101,
    text: "Choose the following is an ethical consideration related to the use of distributed operating systems?",
    options: [
      "Resource allocation",
      "System performance",
      "User authentication",
      "Privacy and security",
    ],
    answer: "Privacy and security",
  },
  {
    id: 102,
    text: "Choose the following is a protocol used for remote procedure calls in distributed operating systems?",
    options: ["TCP", "HTTP", "RPC", "DNS"],
    answer: "RPC",
  },
  {
    id: 103,
    text: "Identify the major benefit of using distributed operating systems?",
    options: [
      "Improved system performance",
      "Reduced system complexity",
      "Lower cost of hardware",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 104,
    text: "Identify the following is an example of middleware used in distributed operating systems?",
    options: [
      "CORBA (Common Object Request Broker Architecture)",
      "HTML (Hypertext Markup Language)",
      "SQL (Structured Query Language)",
      "None of the above",
    ],
    answer: "CORBA (Common Object Request Broker Architecture)",
  },
  {
    id: 105,
    text: "Select the following is a technique used to test the reliability of distributed operating systems?",
    options: [
      "Fault injection",
      "Regression testing",
      "Unit testing",
      "Fault tolerance",
    ],
    answer: "Fault injection",
  },
  {
    id: 106,
    text: "Choose the following is an ethical consideration related to the use of distributed operating systems?",
    options: [
      "Resource allocation",
      "System performance",
      "User authentication",
      "Privacy and security",
    ],
    answer: "Privacy and security",
  },
  {
    id: 107,
    text: "Identify the following is a protocol used for communication between distributed operating systems?",
    options: ["TCP/IP", "HTTP", "DNS", "None of the above"],
    answer: "TCP/IP",
  },
  {
    id: 108,
    text: "Identify the following is a challenge faced by distributed operating systems?",
    options: [
      "Reduced resource sharing",
      "Increased security",
      "Scalability",
      "None of the above",
    ],
    answer: "None of the above",
  },
  {
    id: 109,
    text: "Identify the following is an example of a distributed operating system?",
    options: ["Windows 10", "Linux", "Android", "None of the above"],
    answer: "Linux",
  },
  {
    id: 110,
    text: "Choose the following is a testing technique used to evaluate the performance of distributed operating systems?",
    options: [
      "Unit testing",
      "System testing",
      "Load testing",
      "None of the above",
    ],
    answer: "Load testing",
  },
  {
    id: 111,
    text: "Identify the following is an ethical consideration related to the use of distributed operating systems?",
    options: [
      "System reliability",
      "User satisfaction",
      "Privacy and security",
      "All of the above",
    ],
    answer: "Privacy and security",
  },
  {
    id: 112,
    text: "Choose the following is a protocol used for messaging in distributed operating systems?",
    options: [
      "TCP/IP",
      "HTTP",
      "SMTP (Simple Mail Transfer Protocol)",
      "None of the above",
    ],
    answer: "SMTP (Simple Mail Transfer Protocol)",
  },
  {
    id: 113,
    text: "Select the best definition of deadlock:",
    options: [
      "A situation where a process or multiple processes are stuck waiting for each other to release resources",
      "A situation where a process or multiple processes are executing in parallel",
      "A situation where a process or multiple processes have completed their execution and released resources",
      "A situation where a process or multiple processes have exceeded their memory limits",
    ],
    answer:
      "A situation where a process or multiple processes are stuck waiting for each other to release resources",
  },
  {
    id: 114,
    text: "Choose one of the primary causes of deadlock in real-life scenarios:",
    options: [
      "Inefficient use of resources",
      "Lack of proper communication between processes",
      "High CPU utilization",
      "Insufficient memory allocation",
    ],
    answer: "Inefficient use of resources",
  },
  {
    id: 115,
    text: "Identify a common method for handling deadlock in real-life scenarios:",
    options: [
      "Restarting the system",
      "Terminating one or more processes",
      "Increasing the available resources",
      "All of the above",
    ],
    answer: "Terminating one or more processes",
  },
  {
    id: 116,
    text: "Identify an example of a real-life scenario where deadlock handling is crucial:",
    options: [
      "Air traffic control",
      "Online shopping",
      "Social media",
      "Streaming music",
    ],
    answer: "Air traffic control",
  },
  {
    id: 117,
    text: "Choose the consequence of deadlock in a system:",
    options: [
      "Processes are halted indefinitely",
      "Processes continue to execute but with reduced efficiency",
      "Processes are terminated automatically",
      "Processes release resources and continue to execute",
    ],
    answer: "Processes are halted indefinitely",
  },
  {
    id: 118,
    text: "Identify the primary cause of deadlock in real-life scenarios:",
    options: [
      "Inefficient use of resources",
      "Lack of proper communication between processes",
      "High CPU utilization",
      "Insufficient memory allocation",
    ],
    answer: "Inefficient use of resources",
  },
  {
    id: 119,
    text: "Choose the best method for handling deadlock in a real-life scenario:",
    options: [
      "Restarting the system",
      "Terminating one or more processes",
      "Increasing the available resources",
      "All of the above",
    ],
    answer: "Terminating one or more processes",
  },
  {
    id: 120,
    text: "Select the correct definition of deadlock:",
    options: [
      "A situation where a process or multiple processes are stuck waiting for each other to release resources",
      "A situation where a process or multiple processes are executing in parallel",
      "A situation where a process or multiple processes have completed their execution and released resources",
      "A situation where a process or multiple processes have exceeded their memory limits",
    ],
    answer:
      "A situation where a process or multiple processes are stuck waiting for each other to release resources",
  },
  {
    id: 121,
    text: "Choose the primary cause of deadlock in real-life scenarios:",
    options: [
      "Inefficient use of resources",
      "Lack of proper communication between processes",
      "High CPU utilization",
      "Insufficient memory allocation",
    ],
    answer: "Inefficient use of resources",
  },
  {
    id: 122,
    text: "Identify a common method for handling deadlock in real-life scenarios:",
    options: [
      "Restarting the system",
      "Terminating one or more processes",
      "Increasing the available resources",
      "All of the above",
    ],
    answer: "Terminating one or more processes",
  },
  {
    id: 123,
    text: "Identify an example of a real-life scenario where deadlock handling is crucial:",
    options: [
      "Air traffic control",
      "Online shopping",
      "Social media",
      "Streaming music",
    ],
    answer: "Air traffic control",
  },
  {
    id: 124,
    text: "Choose what happens when deadlock occurs in a system:",
    options: [
      "Processes are halted indefinitely",
      "Processes continue to execute but with reduced efficiency",
      "Processes are terminated automatically",
      "Processes release resources and continue to execute",
    ],
    answer: "Processes are halted indefinitely",
  },
  {
    id: 125,
    text: "Select the best definition of data security:",
    options: [
      "The protection of computer systems from theft or damage to their hardware, software, or electronic data",
      "The practice of protecting sensitive information from unauthorized access, use, disclosure, or destruction",
      "The process of ensuring that data is complete, accurate, and consistent",
      "The process of identifying and correcting errors in data",
    ],
    answer:
      "The protection of computer systems from theft or damage to their hardware, software, or electronic data",
  },
  {
    id: 126,
    text: "Understand the importance of data security in real-life scenarios:",
    options: [
      "It helps prevent financial losses and damage to reputation",
      "It ensures that data is accurate and consistent",
      "It helps identify and correct errors in data",
      "It enhances the performance of computer systems",
    ],
    answer: "It helps prevent financial losses and damage to reputation",
  },
  {
    id: 127,
    text: "Classify encryption as a method for enhancing data security:",
    options: [
      "Physical security method",
      "Access control method",
      "Authentication method",
      "Cryptographic method",
    ],
    answer: "Cryptographic method",
  },
  {
    id: 128,
    text: "Indicate which of the following is an example of encryption:",
    options: [
      "Installing antivirus software on a computer",
      "Restricting access to a database",
      "Encoding a message to make it unreadable without a key",
      "Backing up data to an external hard drive",
    ],
    answer: "Encoding a message to make it unreadable without a key",
  },
  {
    id: 129,
    text: "Choose the best method for protecting sensitive data from unauthorized access:",
    options: [
      "Encryption",
      "Backup",
      "Antivirus software",
      "Physical security measures",
    ],
    answer: "Encryption",
  },
  {
    id: 130,
    text: "Identify an example of a real-life scenario where data security is critical:",
    options: [
      "Online shopping",
      "Social media",
      "Streaming music",
      "Healthcare records",
    ],
    answer: "Healthcare records",
  },
  {
    id: 131,
    text: "Select the following is an example of IPC mechanism:",
    options: ["Message passing", "Mutex", "Semaphore", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 132,
    text: "Select the IPC mechanism that allows one process to send a message to another process and wait for a reply:",
    options: ["Message passing", "Mutex", "Semaphore", "Pipe"],
    answer: "Message passing",
  },
  {
    id: 133,
    text: "Select the correct statement regarding inter-process communication (IPC):",
    options: [
      "IPC is used to communicate between different threads in a program",
      "IPC is a method to transfer data between two different processes",
      "IPC can be used to communicate between two different programs running on the same system",
      "IPC is only used in distributed systems",
    ],
    answer:
      "IPC is a method to transfer data between two different processes",
  },
  {
    id: 134,
    text: "Understand the classification of inter-process communication (IPC) mechanisms based on the synchronization:",
    options: [
      "Synchronous and asynchronous IPC",
      "Message passing and mutex",
      "Semaphore and pipe",
      "Binary search and linear regression",
    ],
    answer: "Synchronous and asynchronous IPC",
  },
  {
    id: 135,
    text: "Choose the IPC mechanism that allows multiple processes to send and receive messages from a central location:",
    options: ["Pipes", "Message queues", "Semaphores", "Shared memory"],
    answer: "Message queues",
  },
  {
    id: 136,
    text: "Identify the IPC mechanism that uses a fixed-sized block of memory to facilitate data exchange between processes:",
    options: ["Pipes", "Message queue", "Shared memory", "Semaphore"],
    answer: "Shared memory",
  },
  {
    id: 137,
    text: "Select the primary purpose of inter-process communication (IPC):",
    options: [
      "TO ALLOW COMMUNICATION BETWEEN TWO DIFFERENT PROCESSORS",
      "TO ALLOW COMMUNICATION BETWEEN TWO DIFFERENT THREADS",
      "TO ALLOW COMMUNICATION BETWEEN TWO DIFFERENT PROCESSES",
      "TO ALLOW COMMUNICATION BETWEEN TWO DIFFERENT APPLICATIONS",
    ],
    answer: "TO ALLOW COMMUNICATION BETWEEN TWO DIFFERENT PROCESSES",
  },
  {
    id: 138,
    text: "Identify Which of the following algorithms is commonly used in message passing for IPC ?",
    options: ["ROUND-ROBIN SCHEDULING", "FIRST-COME, FIRST-SERVED SCHEDULING", "PRIORITY SCHEDULING", "SHORTEST JOB FIRST SCHEDULING"],
    answer: "PRIORITY SCHEDULING",
  },
  {
    id: 139,
    text: "Select the following is not a characteristic of a distributed file system",
    options: [
      "Scalability",
      "Fault Tolerance",
      "Centralized Control",
      "Data Consistency",
    ],
    answer: "Centralized Control",
  },
  {
    id: 140,
    text: "Apply which distributed file system is design for large scale data storage and processing, and is widely used in big data application",
    options: [
      "NFS",
      "HDFS",
      "CIFS",
      "AFS",
    ],
    answer: "HDFS",
  },
  {
    id: 141,
    text: "Analyze the main disadvantage of a distributed file system compared to a traditional centralized file system:",
    options: [
      "Increased complexity",
      "Lower performance",
      "Higher storage costs",
      "Less fault tolerance",
    ],
    answer: "Increased complexity",
  },
  {
    id: 142,
    text: "Distinguish how a distributed file system differs from a distributed database system:",
    options: [
      "Distributed file systems store files, while distributed database systems store data in tables.",
      "Distributed file systems are optimized for high performance, while distributed database systems are optimized for data consistency.",
      "Distributed file systems use a file-level access protocol, while distributed database systems use a record-level access protocol.",
      "Distributed file systems can be used without a network, while distributed database systems require a network.",
    ],
    answer:
      "Distributed file systems store files, while distributed database systems store data in tables.",
  },
  {
    id: 143,
    text: "Choose the following is not a requirement for a protection regime in a distributed system:",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "None of the above",
    ],
    answer: "None of the above",
  },
  {
    id: 144,
    text: "Identify which security mechanism provides a way to ensure the integrity of data transmitted over a network:",
    options: [
      "Digital signature",
      "Encryption",
      "Authentication",
      "Authorization",
    ],
    answer: "Encryption",
  },
  {
    id: 145,
    text: "Select the following is not a possible threat to security in a distributed system:",
    options: [
      "Eavesdropping",
      "Denial of service",
      "Data loss",
      "All of the above are possible threats",
    ],
    answer: "All of the above are possible threats",
  },
  {
    id: 146,
    text: "Choose one of the best options from the following is not a commonly used security protocol in a distributed system:",
    options: ["SSL/TLS", "Kerberos", "OAuth", "SMTP"],
    answer: "SMTP",
  },
  {
    id: 147,
    text: "Select the process of verifying the identity of a user or entity in a distributed system called:",
    options: ["Authentication", "Authorization", "Encryption", "Decryption"],
    answer: "Authentication",
  },
  {
    id: 148,
    text: "Identify the following is not an access control mechanism in a distributed system:",
    options: [
      "Mandatory access control (MAC)",
      "Role-based access control (RBAC)",
      "Discretionary access control (DAC)",
      "All of the above are access control mechanisms",
    ],
    answer: "All of the above are access control mechanisms",
  },
  {
    id: 149,
    text: "Choose the following is not a technique for ensuring data confidentiality in a distributed system:",
    options: ["Hashing", "Encryption", "Obfuscation", "Steganography"],
    answer: "Hashing",
  },
  {
    id: 150,
    text: "Indicate the following is not a requirement for a secure distributed file system:",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Data compression",
    ],
    answer: "Data compression",
  },
  {
    id: 151,
    text: "Indicate the process of determining what actions a user or entity is allowed to perform in a distributed system called:",
    options: ["Authentication", "Authorization", "Encryption", "Decryption"],
    answer: "Authorization",
  },
  {
    id: 152,
    text: "Choose the following is not a method for ensuring fault tolerance in a distributed system:",
    options: [
      "Replication",
      "Check pointing",
      "Redundancy",
      "Resource allocation",
    ],
    answer: "Resource allocation",
  },
  {
    id: 153,
    text: "Indicate the following is a classification criterion for a distributed mutual exclusion algorithm:",
    options: [
      "Time-based",
      "Event-based",
      "Resource-based",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 154,
    text: "Classify the distributed mutual exclusion algorithm where the request messages are timestamped:",
    options: [
      "Time-based",
      "Resource-based",
      "Event-based",
      "None of the above",
    ],
    answer: "Time-based",
  },
  {
    id: 155,
    text: "Select which algorithm is an example of a time-based distributed mutual exclusion algorithm:",
    options: [
      "Suzuki-Kasami algorithm",
      "Ricart-Agrawala algorithm",
      "Maekawa algorithm",
      "None of the above",
    ],
    answer: "Maekawa algorithm",
  },
  {
    id: 156,
    text: "Identify the following is an event-based distributed mutual exclusion algorithm:",
    options: [
      "Centralized algorithm",
      "Token-based algorithm",
      "Tree-based algorithm",
      "None of the above",
    ],
    answer: "Token-based algorithm",
  },
  {
    id: 157,
    text: "Classify the distributed mutual exclusion algorithm where the resources are classified into groups:",
    options: [
      "Suzuki-Kasami algorithm",
      "Ricart-Agrawala algorithm",
      "Chandy-Misra algorithm",
      "None of the above",
    ],
    answer: "Ricart-Agrawala algorithm",
  },
  {
    id: 158,
    text: "Classify the distributed mutual exclusion algorithm where the request messages are sent to all other processes in the system:",
    options: [
      "Time-based",
      "Event-based",
      "Broadcast-based",
      "None of the above",
    ],
    answer: "Broadcast-based",
  },
  {
    id: 159,
    text: "Classify the distributed mutual exclusion algorithm that is based on the concept of logical clocks:",
    options: [
      "Time-based",
      "Event-based",
      "Logical clock-based",
      "None of the above",
    ],
    answer: "Logical clock-based",
  },
  {
    id: 160,
    text: "Choose the below option from the following. The machine that places the request to access the data is generally called:",
    options: [
      "Server machine",
      "Client machine",
      "Request machine",
      "Response machine",
    ],
    answer: "Client machine",
  },
];

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalScore = 0;
    for (const question of questions) {
      if (selectedOptions[question.id] === question.answer) {
        totalScore += 1;
      }
    }
    setScore(totalScore);
    setShowPopup(true);
    setSubmitted(true);
  };

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false);
      }, 660000);
    }
    return () => clearTimeout(timeout);
  }, [showPopup]);

  return (
    <div className="app">
      <h1 className="app-title">Distributed System MCQ</h1>
      <form className="quiz-form">
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p className="question-text">{question.text}</p>
            <div className="options">
              {question.options.map((option) => (
                <label
                  key={option}
                  className={`option ${
                    submitted &&
                    selectedOptions[question.id] === option &&
                    question.answer !== option
                      ? "wrong-answer"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <p className="popup-content">
            Your score: {score} out of {questions.length * 1}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;

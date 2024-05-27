<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [System Design Primer: The Ultimate Guide](#system-design-primer-the-ultimate-guide)
- [Understanding System Design](#understanding-system-design)
  - [What is the Need for the System Design?](#what-is-the-need-for-the-system-design)
  - [Exploring Essential Design Methods in System Design](#exploring-essential-design-methods-in-system-design)
    - [Architectural Design](#architectural-design)
    - [ERD Diagram](#erd-diagram)
    - [UML Diagram](#uml-diagram)
    - [Class Diagrams](#class-diagrams)
    - [Sequence Diagrams](#sequence-diagrams)
  - [Diving Deeper into System Design Concepts](#diving-deeper-into-system-design-concepts)
    - [Performance vs Scalability](#performance-vs-scalability)
    - [Latency vs Throughput](#latency-vs-throughput)
    - [Consistency Patterns and Availability Patterns](#consistency-patterns-and-availability-patterns)
  - [Advanced Concepts in System Design](#advanced-concepts-in-system-design)
    - [CDN](#cdn)
    - [DNS](#dns)
    - [Caching](#caching)
    - [Proxies](#proxies)
  - [Components of System Design](#components-of-system-design)
    - [Microservices and Service Discovery](#microservices-and-service-discovery)
    - [Database Systems: RDBMS and NoSQL](#database-systems-rdbms-and-nosql)
    - [Communication Protocols](#communication-protocols)
- [Approaching System Design Interview Questions](#approaching-system-design-interview-questions)
  - [Step-by-step Guide](#step-by-step-guide)
    - [Requirements clarification](#requirements-clarification)
    - [Estimation of resources](#estimation-of-resources)
    - [System interface definition](#system-interface-definition)
    - [Defining Data model](#defining-data-model)
    - [High-level design](#high-level-design)
    - [Detailed design](#detailed-design)
    - [Identifying and resolving bottlenecks](#identifying-and-resolving-bottlenecks)
  - [Sample System Design Interview Questions and Solutions](#sample-system-design-interview-questions-and-solutions)
  - [How would you design a URL Shortening service similar to TinyURL?](#how-would-you-design-a-url-shortening-service-similar-to-tinyurl)
    - [Requirements clarification:](#requirements-clarification)
    - [Approach](#approach)
  - [How would you design a Web Crawler?](#how-would-you-design-a-web-crawler)
  - [How would you design Facebook and Instagram?](#how-would-you-design-facebook-and-instagram)
  - [How would you design the API rate limit?](#how-would-you-design-the-api-rate-limit)
- [Next Steps: Resources for Further Learning](#next-steps-resources-for-further-learning)
  - [System Design Interview Roadmap By Design Guru](#system-design-interview-roadmap-by-design-guru)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# System Design Primer: The Ultimate Guide

Dive deep into system design with our System Design Primer ultimate guide. From beginners to experienced professionals, we've got resources to elevate your skills.

# Understanding System Design

System design is a step-by-step process of defining a particular software's architecture, modules, components, etc.
This system design primer helps you to understand the essence of system design and various concepts from basic to advanced.

## What is the Need for the System Design?

You understood that system design is used to prepare the architecture of the software or application. Now, let's understand why it is necessary to design a system before starting to write code for the application.

Let's start with an example.

Suppose you are a software developer, and business owners come to you that they need to build a software application. The first step of software development is that you ask them about their requirements, which can be functional and non-functional. Non-functional requirements include scalability, high availability, consistency, etc.

After knowing the requirements, system design comes into the picture. You need to prepare the architecture for the application according to requirements. For example, you need to decide whether you want to use SQL or NoSQL databases based on the data you need to store. Next, you need to decide how to make the application scalable in case the traffic increases.

For example, companies like Google, Facebook, etc., have multiple servers worldwide and serve the resources to users from the nearest server to make their applications efficient. This is also a part of the system design.

## Exploring Essential Design Methods in System Design

The system design contains a wide range of design methods and techniques to design the system's architecture. Developers are required to choose a particular method based on the project's requirements.

Here, I've covered some of the system design methods commonly used by developers.

### Architectural Design

The architectural design is the base of the system design. It describes the infrastructure, model, view, components, and interaction.

The architectural design includes client-server interaction, microservices, etc.

### ERD Diagram

The ERD diagram is an acronym for the entity-relationship diagram. The ERD diagram is mainly used in designing the application's database structure.

In the ERD diagram, you can define multiple database schemas, add entities in each schema, and add multiple attributes for each entity. Also, you can connect the entities of two different schemas if a relationship exists between them.

### UML Diagram

The UML stands for the unified modeling language. It is used to prepare modeling software systems.

It contains different diagrams like activity diagrams, class diagrams, sequence diagrams, etc., to represent the different aspects of the system.

### Class Diagrams

The class diagrams are used to represent the classes. The class diagram can also contain the class's attributes, methods, and relationships between multiple classes.

Basically, the class diagram provides an overview of the system's data and functionality.

### Sequence Diagrams

The sequence diagrams represent the interaction between the various components of the system. It is used to model the behavior of the system.

For example, you can specify when users enter the specific input at the front end side of the application, how the application should process the data, and return the response.

## Diving Deeper into System Design Concepts

Here, I've covered the basics and fundamental concepts of the system design. Let's look at each concept one by one.

### Performance vs Scalability

**Performance:** When you visit any particular website, some website takes more time to load, and others get loaded in a fraction of a second. For example, Google.

If the loading time of your website is longer, traffic can decrease as visitors prefer to go to other websites. Various mechanisms like caching can be used to increase the application's performance and serve resources faster.

**Scalability:** The term scalability refers to the ability to scale the application. For example, your application is becoming more popular every day, and due to that, your application’s server is getting more requests. Now, how do you handle it?

The answer is simple: You can scale your application by distributing the load across multiple servers or increasing the single server's capacity.

**Did you know?:** Millions of users visit Google every day. So, they have worldwide data centers for distributing the load. When the number of users increases, they either increase the capacity of a particular server or develop a new server.

### Latency vs Throughput

**Latency:** The latency is a measurement of the time delay to complete a single request or data operation.

In simple words, latency is a network delay that occurs due to Geographical distance, transport protocol, or network infrastructure. It is measured in the Milliseconds.

**Did you know?:** While playing online games like PUBG, Valorant, etc., you see a ping in milliseconds. So, for higher pings, there is a higher network delay. That’s why lower latency is required for the best experience.

**Throughput:** On the other hand, throughput is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time.

It is measured in megabytes (MB) per second. It is used to check the capability of the systems. If the throughput of the server is low, architectures can scale the server to make it efficient.

### Consistency Patterns and Availability Patterns

**Consistency:** Consistency ensures that all nodes in the system read the same data at a particular time.

For example, you and your friend both are using the same bank account. You have withdrawn some money from the account, and at the same time, your friend has also withdrawn money from the same account. So, If the banking system is inconsistent, it will subtract the withdrawn balance only once from the total balance.

**Availability:** The system's availability ensures that each request receives a response either with fresh or old data. The availability is important when high uptime is needed.

**Consistency Patterns**

- **Strong consistency:** Strong consistency ensures that each request should get the most recent data. To achieve strong consistency, you require synchronized communication. It prioritizes consistency over availability.
- **Eventual Consistency:** Eventual consistency allows temporary inconsistencies to be resolved soon. It prioritizes availability over consistency.
- **Weak Consistency:** In the weak consistency pattern, the user may get fresh data after writing the data. It focuses on the fast access. It can be used in live streaming or video chat.
  **Availability Patterns**
- **Load Balancing:** The upcoming request can be distributed across multiple servers to achieve high availability. As we balance the load here, it is called the load balancing.
- **Retry and timeout strategies:** You can implement the retry mechanism to process the request after every interval if the system fails or is not available. For example, if you didn’t get a response on any website, you may refresh it and get a response.
  You can learn other fundamental concepts of system design in the [Ultimate System Design Cheat Sheet](https://www.designgurus.io/blog/system-design-cheat-sheet), or you can enroll in the [Grokking System Design Fundamentals](https://www.designgurus.io/course/grokking-system-design-fundamentals) course.

## Advanced Concepts in System Design

Let’s explore some [advanced concepts of the system design](https://www.designgurus.io/blog/system-design-interview-fundamentals).

### CDN

**[CDN](https://www.designgurus.io/blog/content-delivery-network-cdn-system-design-basics)** stands for the content delivery network. The CDN is a distributed server network located at different geo-locations. The CDN is used to deliver content like images, various data, etc., from the server.

The CDN delivers the resource faster, decreases latency (network delay), and improves the application's performance.

When users request a particular resource, the application requests the nearest server. If the nearest server has cached resources already, it serves it directly. Otherwise, it requests the origin server, caches the resources, and delivers them to the users. Next time, when the server gets a request for the same resource, it will return the cached resources.

### DNS

The DNS stands for the domain name system. In the 20th century, users were required to use the ip address to access the IP address. The server returns the resources based on the IP address.

As time passed, more websites developed, and it became hard to remember ip address for each website. So, a domain name system is introduced. The DNS system allows users to access the website and its resources using the domain name (e.g., www.example.com). It maps the unique domain name with a unique IP address. So, whenever you make a request for the resources of the particular domain name, it returns the resources of IP addresses, which are mapped with the domain name.

### Caching

**Caching** is a mechanism to serve resources faster. It is also called high-speed storage. It works between the web application and the source of the data.

For example, when you make a request for some data, the application checks first in the cache storage. If data exists in the cache storage, it returns the data. Otherwise, it requests the database or source of the data, stores it in the cache storage, and sends data to the application.

**Did you know?:** Cookies are used to cache data in your browser.

### Proxies

The proxy is also called the proxy server. The proxy server works between the client of the application and the internet. Whenever you request to get resources from the internet, the application requests the proxy server, and the proxy server gets resources and sends them back to the application.

The proxy servers are used for the caching.

**Did you know?:** When you use the VPN, it changes the proxy server. So, you can get the blocked resources by your proxy server.

## Components of System Design

Let’s explore the components of the system design in this section. I’ve covered from microservices to communication protocols.

### 1. Microservices and Service Discovery

Microservices architecture is one of the most used system design approaches to prepare software architecture. The microservices break down complex applications into small services, such that each service works independently and accomplishes specific tasks.

- **Service Identification:** Every microservice has a unique ID and name for its identification.
- **Dynamic Service Discovery:** Each microservice can dynamically find other services located in the same network. So, scaling and load balancing become easy.

### 2. Database Systems: RDBMS and NoSQL

Choosing the right database is important in the system design. There are two primary categories of the database: RDBMS and NoSQL.

**RDBMS**
The RDBMS stands for the relational database management system. The SQL databases are built on the top of the RDBMS. When you need to store structured data, you can choose the RDBMS for the software or application. It makes it easier to access the data from the database and connect it with other data as they are stored in the table format.

Here are the characteristics of the RDBMS database.

- It stores the data in the table format.
- You can’t scale the RDBMS database horizontally, but you can scale it vertically.
- SQL is a query language for the RDBMS databases.
- Accessing data from the RDBMS database is slow.

**NoSQL**

The NoSQL database means a non-SQL database. It stores the data in the key-value pair instead of in table format. You can use the NoSQL database when you are required to store unstructured data in the database.

Here are the characteristics of the NoSQL database.

- It stores the data in the key-value pair format.
- NoSQL database is horizontally scalable, as you can add new key-value pairs for new attributes.
- Each record can contain different key-value pairs.
- It is faster than RDBMS databases.
- It supports frequent changes in the database.

### 3. Communication Protocols

Protocols mean rules and communication protocols refer to the rules to communicate or exchange the data between two systems. The systems can also be server and client.

Here, I’ve explained various communication protocols.

- **HTTP/HTTPS:** The full form of the HTTP is a hypertext transfer protocol. HTTPS is a secure version of HTTP. They are used in web-based communication. It is a good idea to use HTTPS always for security reasons.
- **TCP/IP:** The TCP stands for the transmission control protocol. The TCP protocol is used to communicate over the internet. For example, it is used in the chatting application.
- **UDP:** The UDP is an acronym for the user datagram protocol. It is mainly used for live streaming, video calls, etc., in which data loss can be tolerable.
- **WebSockets:** The web sockets are used for bi-directional duplex communication. It builds the connection between two web applications.

# Approaching System Design Interview Questions

You’ve learned most system design concepts in this system design primer guide.

Now, let’s focus on how to solve the [system design questions](https://www.designgurus.io/blog/url-shortening) with step by step approach.

## Step-by-step Guide

### Requirements clarification

There can be two types of requirements: **function requirements** and **non-function requirements**.

- **Function requirements:** The functional requirements are the requirements in the application with which the user interacts. For example, _authentication, navigation, payment services integration, etc_.

- **Non-function requirements:** The non-functional requirements are the requirements to improve the application's capabilities. For example, _high availability, scalability, consistency, low latency, high throughput, etc., are the non-functional requirements_.

You should move on to the next step according to the application's requirements.

### Estimation of resources

The next step is deciding what kind of resources you should use to build the application.

For example, while selecting the resources for the server, you should keep in mind how how many requests it will receive per day or second.

Furthermore, you are also required to decide how much data you require to store in the database.

### System interface definition

The third step is designing the system interface. For example, defining the API endpoints and what to expect from each API endpoint.

Let's look at the example of the sample API.

```
sendNotification(userId, message, …);
```

### Defining Data model

The next important part is selecting a database for the application.

If you need to store the structured data and tables are pre-determined, you can use the relational database. For storing the unstructured data, you should use NoSQL databases like MongoDB.

If you are building social media applications like Facebook or Twitter, you can easily use Graph databases to manage many-to-many relationships.

### High-level design

The next step is designing the high-level components. You can’t design the system for the whole application in a single go. So, you need to go step-by-step.

In this step, you need to decide how you will connect the components of the system with each other. For example, connecting the server with the database, connecting the server with the client, and integrating the third-party tools with the applications.

In this step, you can fulfill the functional requirements of the application.

### Detailed design

After creating the basic design of the application, you need to improve the system design. You need to analyze the system to fulfill the non-functional requirements.

You can analyze it as given below.

- How to use caching to improve the performance of the application?
- How do we scale the application via load balancing?
- Should you use the CDN for caching, or are cookies enough?
- How would you handle the failure of the application?
- Should you distribute the data across multiple databases?
- How will you replicate the database?

### Identifying and resolving bottlenecks

At last, you should identify the bottlenecks in your system design and discuss the solutions to resolve them with the interviewer.

The sample bottlenecks can be shown below.

- Can the system fail in any scenario? If yes, how will you handle it?
- How do you monitor the performance of the system and issues in the system?
- Do you have enough replicas of the database to handle the failure?

## Sample System Design Interview Questions and Solutions

## How would you design a URL Shortening service similar to TinyURL?

### Requirements clarification:

### Approach

## How would you design a Web Crawler?

## How would you design Facebook and Instagram?

## How would you design the API rate limit?

# Next Steps: Resources for Further Learning

## System Design Interview Roadmap By Design Guru

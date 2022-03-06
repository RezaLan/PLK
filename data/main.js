function B1() {
  let js = "";

  js += "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  js += "\n\n"
  js += "Over 97% of websites use JavaScript on the client-side for web page behavior, often incorporating third-party libraries."
  js += "\n\n"
  js += "All major web browsers have a dedicated JavaScript engine to execute the code on users' devices."
  js += "\n\n"
  js += "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based"
  js += "object orientation, and first-class functions.It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions,"
  js += "standard data structures, and the Document Object Model (DOM)."
  js += "\n\n"
  js += "The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities."
  js += "In practice, the web browser or other runtime system provides"
  js += "JavaScript APIs for I/O. JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js."
  js += "\n\n"
  js += "Although Java and"
  js += "JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design."
  js += "\n\n\nFor print Hello World:";
  js += "\n\nconsole.log(\"Hello World\");";

  document.getElementById("p").innerText = js;

  var image = document.getElementById("inimage");

  image.src = "data/media/jsuse.png";

  document.getElementById("p2").innerText = "Release Date: 1995";
}
function B2() {
  let py = "";

  py += "Python is an interpreted high-level general-purpose programming language.";
  py += "Its design philosophy emphasizes code readability with the use of significant indentation.";
  py += "Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects.";
  py += "\n\n";
  py += "Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a \"batteries included\" language due to its comprehensive standard library.";
  py += "\n\n";
  py += "Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language, and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely backward-compatible with earlier versions. Python 2 was discontinued version 2.7.18 in 2020.";
  py += "\n\n";
  py += "Python consistently ranks as one of the most popular programming languages";
  py += "\n\n\nFor print Hello World:";
  py += "\n\nprint(\"Hello World\")\n\nPython used for ";

  document.getElementById("p").innerText = py;

  var image = document.getElementById("inimage");

  image.src = "data/media/pyuse.png";

  document.getElementById("p2").innerText = "Release Date: 1991";
}
function B3() {
  let cpp = "";

  cpp += "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.";
  cpp += "\n\n";
  cpp += "C++ was designed with an orientation toward systems programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes).";
  cpp += "\n\n";
  cpp += "C++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20). The C++ programming language was initially standardized in 1998 as ISO/IEC 14882:1998, which was then amended by the C++03, C++11, C++14, and C++17 standards. The current C++20 standard supersedes these with new features and an enlarged standard library. Before the initial standardization in 1998, C++ was developed by Danish computer scientist Bjarne Stroustrup at Bell Labs in 1979 as an extension of the C language; he wanted an efficient and flexible language similar to C that also provided high-level features for program organization. Since 2012, C++ has been on a three-year release schedule with C++23 as the next planned standard.";
  cpp += "\n\n\nFor print Hello World:";
  cpp += "\n\nstd::cout(\"Hello World\");";

  document.getElementById("p").innerText = cpp;

  var image = document.getElementById("inimage");

  image.src = "data/media/cppuse.png";

  document.getElementById("p2").innerText = "Release Date: 1983";
}
function B4() {
  let cs = "";

  cs += "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.";
  cs += "\n\n";
  cs += "C# was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Microsoft introduced C# along with .NET Framework and Visual Studio, both of which were closed-source. At the time, Microsoft had no open-source products. Four years later, in 2004, a free and open-source project called Mono began, providing a cross-platform compiler and runtime environment for the C# programming language. A decade later, Microsoft released Visual Studio Code (code editor), Roslyn (compiler), and the unified .NET platform (software framework), all of which support C# and are free, open-source, and cross-platform. Mono also joined Microsoft but was not merged into .NET.";
  cs += "\n\n";
  cs += "As of 2021, the most recent version of the language is C# 10.0, which was released in 2021 in .NET 6.0";

  cs += "\n\n\nFor print Hello World:";
  cs += "\n\nConsole.WriteLine(\"Hello World\");";

  document.getElementById("p").innerText = cs;

  var image = document.getElementById("inimage");

  image.src = "data/media/csuse.png";

  document.getElementById("p2").innerText = "Release Date: 2000";
}
function B5() {
  let jar = "";

  jar += "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++ but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers.";
  jar += "\n\n";
  jar += "Java was originally developed by James Gosling at Sun Microsystems and released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation of Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however, the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.";
  jar += "\n\n";
  jar += "As of October 2021, Java 17 is the latest version. Java 8, 11, and 17 are the current long-term support (LTS) versions. Oracle released the last zero-cost public update for the legacy version Java 8 LTS in January 2019 for commercial use, although it will otherwise still support Java 8 with public updates for personal use indefinitely. Other vendors have begun to offer zero-cost builds of OpenJDK 8 and 11 that are still receiving security and other upgrades.";
  jar += "\n\n";
  jar += "Oracle (and others) highly recommend uninstalling outdated and unsupported versions of Java, due to unresolved security issues in older versions. Oracle advises its users to immediately transition to a supported version, such as one of the LTS versions (8, 11, 17).";
  jar += "\n\n\nFor print Hello World:";
  jar += "\n\nSystem.out.println(\"Hello World\");";

  document.getElementById("p").innerText = jar;

  var image = document.getElementById("inimage");

  image.src = "data/media/jaruse.jpg";

  document.getElementById("p2").innerText = "Release Date: 1995";
}
function B6() {
  let c = "";

  c += "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.";
  c += "\n\n";
  c += "A successor to the programming language B, C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages, with C compilers from various vendors available for the majority of existing computer architectures and operating systems. C has been standardized by ANSI since 1989 (ANSI C) and by the International Organization for Standardization (ISO).";
  c += "\n\n";
  c += "C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.";
  c += "\n\n";
  c += "Since 2000, C has consistently ranked among the top two languages in the TIOBE index, a measure of the popularity of programming languages.";
  c += "\n\n";
  c += "\n\n\nFor print Hello World:";
  c += "\n\nprintf(\"Hello World\");";

  document.getElementById("p").innerText = c;

  document.getElementById("p2").innerText = "Release Date: 1972";
}
function ADB(){
  window.location.pathname="data/AD.html";
}
function AWB(){
  window.location.pathname="data/AW.html";
}
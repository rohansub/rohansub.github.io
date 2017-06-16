#include <vector>
#include <iostream>
struct Coder{
    std::string bestSkill;
    std::vector<std::string> profictientWith;
    std::vector<std::string> knowAbout;
    std::vector<std::string> interests;
    bool readyForMore;
};
int main(){
    Coder Rohan;
    Coder *p = &Rohan;
    p->bestSkill = "C";
    p->proficientWith = { "Python", "Java", "C++", "Git" };
    p->knowAbout = { "JavaScript", "HTML", "CSS", "Django" };
    p->intersts = {"Machine Learning", "Systems Programming", "Computer Security"}
    p->readyForMore = true;
    return 0;
}

const BUILDINGS = [
  {
    number : "5",
    name : "호암관",
    img : "../../static/img/호암관.png",
    facility_icons : [
        {
          src : "../../static/img/check.svg",
          alt : "check.svg",
          id : "check"
        },
        {
          src : "../../static/img/elevator.svg",
          alt : "elevator.svg",
          id : "elevator"
        },
        {
          src : "../../static/img/wheelchair.svg",
          alt : "wheelchair.svg",
          id : "wheelchair"  
        }
    ],
    facilities : [
      "경사로:o",
      "장애인 화장실:1F, 총 2개",
      "(남,여 각 1개)",
      "장애인 표시 승강기:",
      "2대 중 1대",
      "승강기 기능 상태:",
      "층에 설 때만 음성 안내",
      "장애인 주차장:1"
    ],
    floors : [
      {
        level: "지상1층",
        info : "hoam_floor1"
      },
      {
        level: "지상2층",
        info : undefined
      },
      {
        level: "지상3층",
        info : undefined
      },
      {
        level: "지상4층",
        info : undefined
      },
      {
        level: "지상5층",
        info : undefined
      },
      {
        level: "지상6층",
        info : undefined
      },
      {
        level: "지상7층",
        info : undefined
      },
      {
        level: "지상8층",
        info : undefined
      },
      {
        level: "지상9층",
        info : undefined
      },
      {
        level: "지상10층",
        info : undefined
      },
      {
        level: "지상11층",
        info : undefined
      },
      {
        level: "지상12층",
        info : undefined
      }
    ]
  }
]

export default BUILDINGS;
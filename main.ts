IR.IR_callbackUser(function (message) {
    if (message == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 130)
    }
    if (message == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 130)
    }
    if (message == 22) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 130)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    }
    if (message == 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 130)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
	
})
